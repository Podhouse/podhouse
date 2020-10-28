import { GraphQLObjectType, GraphQLString } from "graphql";
import { connectionArgs } from "graphql-relay";

import UserType from "../modules/User/UserType";
import UserConnection from "../modules/User/UserConnection";
import * as UserLoader from "../modules/User/UserLoader";

import { NodeField, NodesField } from "../interface/NodeInterface";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root of all... queries",
  fields: () => ({
    node: NodeField,
    nodes: NodesField,
    currentUser: {
      type: UserType,
      resolve: (_, args, context) => context.user,
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
