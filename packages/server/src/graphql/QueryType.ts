import { GraphQLObjectType, GraphQLNonNull, GraphQLID } from "graphql";
import { connectionArgs } from "graphql-relay";

import UserType from "../modules/User/UserType";
import * as UserLoader from "../modules/User/UserLoader";

import PodcastType from "../modules/Podcast/PodcastType";
import { PodcastConnection } from "../modules/Podcast/PodcastType";
import * as PodcastLoader from "../modules/Podcast/PodcastLoader";

import { nodesField, nodeField } from "../modules/Node/TypeRegister";

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
      resolve: async (_, args, context) =>
        await PodcastLoader.loadAll(context, args),
    },
    podcast: {
      type: PodcastType,
      args: {
        _id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve: async (_, { _id }, context) =>
        await PodcastLoader.load(context, _id),
    },
  }),
});

export default QueryType;
