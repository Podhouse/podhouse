import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { globalIdField } from "graphql-relay";

import { IUser } from "./UserModel";
import { load } from "./UserLoader";

import * as PodcastLoader from "../Podcast/PodcastLoader";
import { PodcastConnection } from "../Podcast/PodcastType";

import { nodeInterface, registerTypeLoader } from "../Node/TypeRegister";

import {
  connectionArgs,
  connectionDefinitions,
  mongooseIDResolver,
} from "../../common/";

import { GraphQLContext } from "../../types";

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
      resolve: async ({ subscriptions }, args, context: GraphQLContext) =>
        await PodcastLoader.loadAll(context, subscriptions),
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

registerTypeLoader(UserType, load);

export const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: UserType,
});
