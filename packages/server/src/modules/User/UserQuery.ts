import { GraphQLID, GraphQLNonNull, GraphQLList } from "graphql";
import { fromGlobalId } from "graphql-relay";

import UserType from "./UserType";
import * as UserLoader from "./UserLoader";

const UserQuery = {
  currentUser: {
    type: UserType,
    description: "Get current user",
    resolve: (root, args, context) => console.log('context -> ', context),
  },
  getUser: {
    type: UserType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: async (_, { id }, context) =>
      await UserLoader.load(context, fromGlobalId(id).id),
  },
  getUsers: {
    type: GraphQLList(UserType),
    resolve: async (_, args, context) =>
      await UserLoader.loadUsers(context, args),
  },
};

export default UserQuery;
