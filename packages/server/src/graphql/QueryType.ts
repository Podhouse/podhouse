import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} from "graphql";
import { connectionArgs } from "graphql-relay";

import UserType from "../modules/User/UserType";
import UserModel, { IUser } from "../modules/User/UserModel";
import * as UserLoader from "../modules/User/UserLoader";

import PodcastType from "../modules/Podcast/PodcastType";
import { PodcastConnection } from "../modules/Podcast/PodcastType";
import * as PodcastLoader from "../modules/Podcast/PodcastLoader";

import EpisodeType from "../modules/Episode/EpisodeType";
import { EpisodeConnection } from "../modules/Episode/EpisodeType";
import * as EpisodeLoader from "../modules/Episode/EpisodeLoader";

import { nodesField, nodeField } from "../modules/Node/TypeRegister";

import { withFilter } from "../common/withFilter";

import { GraphQLContext } from "../types";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "Query",
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    currentUser: {
      type: UserType,
      resolve: (root, args, context: GraphQLContext) =>
        UserLoader.load(context, context.user?._id),
    },
    podcasts: {
      type: GraphQLNonNull(PodcastConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: async (_, args, context: GraphQLContext) =>
        await PodcastLoader.loadAll(context, args),
    },
    podcastsByName: {
      type: GraphQLNonNull(PodcastConnection.connectionType),
      args: {
        ...connectionArgs,
        name: {
          type: GraphQLString,
        },
      },
      resolve: async (_, args, context: GraphQLContext) =>
        await PodcastLoader.loadAll(
          context,
          withFilter(args, {
            name: args.name,
          }),
        ),
    },
    podcastsByGenre: {
      type: GraphQLNonNull(PodcastConnection.connectionType),
      args: {
        ...connectionArgs,
        primaryGenre: {
          type: GraphQLString,
        },
      },
      resolve: async (_, args, context: GraphQLContext) =>
        await PodcastLoader.loadAll(
          context,
          withFilter(args, {
            primaryGenre: args.primaryGenre,
          }),
        ),
    },
    podcast: {
      type: PodcastType,
      args: {
        _id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve: async (_, { _id }, context: GraphQLContext) =>
        await PodcastLoader.load(context, _id),
    },
    episodes: {
      type: GraphQLNonNull(EpisodeConnection.connectionType),
      args: {
        ...connectionArgs,
        podcast: {
          type: GraphQLID,
        },
        name: {
          type: GraphQLString,
        },
      },
      resolve: async (_, args, context: GraphQLContext) =>
        await EpisodeLoader.loadAll(
          context,
          withFilter(args, {
            name: args.name,
          }),
        ),
    },
    episode: {
      type: EpisodeType,
      args: {
        _id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve: async (_, { _id }, context: GraphQLContext) =>
        await EpisodeLoader.load(context, _id),
    },
    userSubscribedToPodcast: {
      type: GraphQLNonNull(GraphQLBoolean),
      args: {
        _id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve: async (_, { _id }, context: GraphQLContext) => {
        const user: Array<IUser> | [] = await UserModel.find({
          _id: context.user?._id,
          subscriptions: { $in: [_id] },
        });

        if (!Array.isArray(user) || !user.length) {
          return false;
        } else {
          return true;
        }
      },
    },
  }),
});

export default QueryType;
