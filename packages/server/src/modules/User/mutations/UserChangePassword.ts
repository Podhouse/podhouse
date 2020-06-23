import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import * as UserLoader from "../UserLoader";
import UserType from "../UserType";

export default mutationWithClientMutationId({
  name: "UserChangePassword",
  inputFields: {
    currentPassword: {
      type: new GraphQLNonNull(GraphQLString),
    },
    newPassword: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ currentPassword, newPassword }, { user }) => {
    if (!user) {
      return {
        error: "User not authenticated",
      };
    }

    const correctPassword = user.authenticate(currentPassword);

    if (!correctPassword) {
      return {
        error: "Current password invalid",
      };
    }

    user.password = newPassword;
    await user.save();

    return {
      error: null,
    };
  },
  outputFields: {
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
    me: {
      type: UserType,
      resolve: (obj, args, context) =>
        UserLoader.load(context, context.user.id),
    },
  },
});
