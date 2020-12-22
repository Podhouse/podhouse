import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
} from "graphql";
import { globalIdField, connectionFromArray } from "graphql-relay";

import { load } from "./UserLoader";

import { PodcastConnection } from "../Podcast/PodcastType";
import * as PodcastLoader from "../Podcast/PodcastLoader";

import { EpisodeConnection } from "../Episode/EpisodeType";
import * as EpisodeLoader from "../Episode/EpisodeLoader";

import { nodeInterface, registerTypeLoader } from "../Node/TypeRegister";

import {
  connectionDefinitions,
  connectionArgs,
  mongooseIDResolver,
} from "../../common/";

import { GraphQLContext } from "../../types";

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

const UserType: GraphQLObjectType = new GraphQLObjectType({
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
      type: GraphQLNonNull(PodcastConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: async (user, args, context: GraphQLContext) => {
        const podcasts = user.subscriptions.map((id) =>
          PodcastLoader.load(context, id.toString()),
        );
        const result = await Promise.all(podcasts).then((res) => res);
        return connectionFromArray(result, args);
      },
    },
    favorites: {
      type: GraphQLNonNull(EpisodeConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: async (user, args, context: GraphQLContext) => {
        const episodes = user.favorites.map((id) =>
          EpisodeLoader.load(context, id.toString()),
        );
        const result = await Promise.all(episodes).then((res) => res);
        return connectionFromArray(result, args);
      },
    },
    subscribed: {
      type: GraphQLBoolean,
      args: {
        input: {
          type: GraphQLNonNull(UserSubscribedInputType),
        },
      },
      resolve: ({ subscriptions }, { input }: { input: { _id: string } }) => {
        const stringsSubscriptions: Array<string> = subscriptions.map((x) =>
          x.toString(),
        );
        const uniqueStrings: Array<string> = [...new Set(stringsSubscriptions)];
        return uniqueStrings.includes(input._id);
      },
    },
    favorited: {
      type: GraphQLBoolean,
      args: {
        input: {
          type: GraphQLNonNull(UserSubscribedInputType),
        },
      },
      resolve: ({ subscriptions }, { input }: { input: { _id: string } }) => {
        const stringsFavorites: Array<string> = subscriptions.map((x) =>
          x.toString(),
        );
        const uniqueStrings: Array<string> = [...new Set(stringsFavorites)];
        return uniqueStrings.includes(input._id);
      },
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ createdAt }) => (createdAt ? createdAt.toISOString() : null),
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ updatedAt }) => (updatedAt ? updatedAt.toISOString() : null),
    },
  }),
  interfaces: () => [nodeInterface],
});

export default UserType;

registerTypeLoader(UserType, load);

export const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: UserType,
});
