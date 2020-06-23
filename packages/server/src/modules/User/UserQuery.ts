import { GraphQLID, GraphQLNonNull } from "graphql";
import { fromGlobalId } from "graphql-relay";

import UserType from "./UserType";
import * as UserLoader from "./UserLoader";

import { GraphQLContext } from "../../common/types";

const UserQuery = {
  currentUser: {
    type: UserType,
    description: "Get current user",
    resolve: (parent, args, context: GraphQLContext, info) => context.user,
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
};

export default UserQuery;
