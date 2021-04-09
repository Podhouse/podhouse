import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
} from "graphql";
import { globalIdField, connectionFromArray } from "graphql-relay";
import { format } from "date-fns";

import { load } from "./UserLoader";

import { PodcastConnection } from "../Podcast/PodcastType";
import * as PodcastLoader from "../Podcast/PodcastLoader";

import * as EpisodeLoader from "../Episode/EpisodeLoader";
import EpisodeType from "../Episode/EpisodeType";

import { nodeInterface, registerTypeLoader } from "../Node/TypeRegister";

import {
  connectionDefinitions,
  connectionArgs,
  mongooseIDResolver,
  timestamps,
} from "../../common/";

import { GraphQLContext } from "../../types";
import { IUser } from "./UserModel";

const UserSubscribedInputType = new GraphQLInputObjectType({
  name: "UserSubscribedInput",
  description: "Input payload for checking if user is subscribed to podcast",
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

const UserFavoritedInputType = new GraphQLInputObjectType({
  name: "UserFavoritedInput",
  description: "Input payload for checking if user has favorited an episode",
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

const EpisodeFavoriteAndHistoryType = new GraphQLObjectType({
  name: "EpisodeFavoriteAndHistoryType",
  description: "User history",
  fields: () => ({
    episode: {
      type: new GraphQLNonNull(EpisodeType),
      resolve: ({ episode }) => episode,
    },
    date: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({ date }) => format(date, "MM/dd/yyyy"),
    },
  }),
});

const EpisodeFavoriteAndHistoryConnection = connectionDefinitions({
  name: "EpisodeFavoriteAndHistory",
  nodeType: EpisodeFavoriteAndHistoryType,
});

const UserType: GraphQLObjectType = new GraphQLObjectType<
  IUser,
  GraphQLContext
>({
  name: "User",
  description: "UserType",
  fields: () => ({
    id: globalIdField("User"),
    ...mongooseIDResolver,
    email: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ email }) => email,
    },
    subscriptions: {
      type: PodcastConnection.connectionType,
      args: {
        ...connectionArgs,
      },
      resolve: async ({ subscriptions }, args, context: GraphQLContext) => {
        const podcasts = subscriptions.map((id) =>
          PodcastLoader.load(context, id.toString()),
        );
        const result = await Promise.all(podcasts).then((res) => res);
        return connectionFromArray(result, args);
      },
    },
    favorites: {
      type: EpisodeFavoriteAndHistoryConnection.connectionType,
      args: {
        ...connectionArgs,
      },
      resolve: async ({ favorites }, args, context: GraphQLContext) => {
        const favoritedEpisodes = favorites.map(async (item: any) => {
          const episode = await EpisodeLoader.load(
            context,
            item._id.toString(),
          );

          return {
            episode,
            date: item.date,
          };
        });
        const result = await Promise.all(favoritedEpisodes).then((res) => res);
        const sortedResult = result.sort((a, b) => b.date - a.date);
        return connectionFromArray(sortedResult, args);
      },
    },
    history: {
      type: EpisodeFavoriteAndHistoryConnection.connectionType,
      args: {
        ...connectionArgs,
      },
      resolve: async ({ history }, args, context: GraphQLContext) => {
        const historyEpisodes = history.map(async (item: any) => {
          const episode = await EpisodeLoader.load(
            context,
            item._id.toString(),
          );

          return {
            episode,
            date: item.date,
          };
        });
        const result = await Promise.all(historyEpisodes).then((res) => res);
        const sortedResult = result.sort((a, b) => b.date - a.date);
        return connectionFromArray(sortedResult, args);
      },
    },
    hasSubscribed: {
      type: GraphQLNonNull(GraphQLBoolean),
      args: {
        input: {
          type: UserSubscribedInputType,
        },
      },
      resolve: ({ subscriptions }, { input }: { input: { _id: string } }) => {
        const subscriptionsStrings = [
          ...new Set(subscriptions.map((x) => x.toString())),
        ];
        return subscriptionsStrings.includes(input._id);
      },
    },
    hasFavorited: {
      type: GraphQLNonNull(GraphQLBoolean),
      args: {
        input: {
          type: UserFavoritedInputType,
        },
      },
      resolve: ({ favorites }, { input }: { input: { _id: string } }) => {
        const favoritesStrings = [
          ...new Set(favorites.map((item) => item._id.toString())),
        ];
        return favoritesStrings.includes(input._id);
      },
    },
    ...timestamps,
  }),
  interfaces: () => [nodeInterface],
});

export default UserType;

registerTypeLoader(UserType, load);

export const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: UserType,
});
