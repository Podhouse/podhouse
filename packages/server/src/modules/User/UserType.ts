import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import {
  globalIdField,
  connectionDefinitions,
  connectionArgs,
} from "graphql-relay";

import { nodeInterface } from "../Node/TypeRegister";

import { IUser } from "./UserModel";

import * as PodcastLoader from "../Podcast/PodcastLoader";
import { PodcastConnection } from "../Podcast/PodcastType";

import { GraphQLContext } from "../../types";

import { mongooseIDResolver } from "../../utils/mongooseIDResolver";
import { withFilter } from "../../utils/withFilter";

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
      type: GraphQLNonNull(PodcastConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: async (user, args, context) =>
        await PodcastLoader.loadAll(context, args),
    },
    createdAt: {
      type: GraphQLString,
      resolve: (obj) => (obj.createdAt ? obj.createdAt.toISOString() : null),
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (obj) => (obj.updatedAt ? obj.updatedAt.toISOString() : null),
    },
  }),
  interfaces: () => [nodeInterface],
});

export default UserType;

export const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: UserType,
});
