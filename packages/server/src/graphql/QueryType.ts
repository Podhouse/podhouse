import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} from "graphql";
import { fromGlobalId, connectionArgs } from "graphql-relay";

import UserType from "../modules/User/UserType";
import UserConnection from "../modules/User/UserConnection";
import * as UserLoader from "../modules/User/UserLoader";

import { NodeField } from "../interface/NodeInterface";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root of all... queries",
  fields: () => ({
    node: NodeField,
    currentUser: {
      type: UserType,
      resolve: (_, args, context) =>
        context.user ? UserLoader.load(context, context.user._id) : null,
    },
    getUser: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: async (_, { id }, context) =>
        await UserLoader.load(context, fromGlobalId(id).id),
    },
    getUsers: {
      type: UserConnection.connectionType,
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString,
        },
      },
      resolve: async (_, args, context) =>
        await UserLoader.loadUsers(context, args),
    },
  }),
});

export default QueryType;
