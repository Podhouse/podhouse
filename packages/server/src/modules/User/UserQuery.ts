import { GraphQLString, GraphQLNonNull } from "graphql";

import UserType from "./UserType";

import { GraphQLContext } from "../../common/types";

const UserQuery = {
  currentUser: {
    type: UserType,
    description: "Get current user",
    resolve: (parent, args, context: GraphQLContext, info) => context.user,
  },
  getUser: {
    type: UserType,
    description: "Get specific user",
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: (parent, { id }, context, info) => {
      const {
        dataloaders: { UserLoader },
      } = context;
      return UserLoader.load(id);
    },
  },
};

export default UserQuery;
