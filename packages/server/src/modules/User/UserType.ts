import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { globalIdField, connectionDefinitions } from "graphql-relay";

import { nodeInterface } from "../Node/TypeRegister";

import { IUser } from "./UserModel";

import { GraphQLContext } from "../../types";

import { mongooseIDResolver } from "../../common/mongooseIDResolver";

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
