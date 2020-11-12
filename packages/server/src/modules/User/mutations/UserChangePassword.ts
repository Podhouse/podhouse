import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import { errorField, successField } from "@podhouse/graphql";

import { GraphQLContext } from "../../../types";

type UserChangePasswordArgs = {
  oldPassword: string;
  newPassword: string;
};

export default mutationWithClientMutationId({
  name: "UserChangePassword",
  inputFields: {
    oldPassword: {
      type: new GraphQLNonNull(GraphQLString),
    },
    newPassword: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { oldPassword, newPassword }: UserChangePasswordArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        error: "User not authenticated",
      };
    }

    const correctPassword = user.authenticate(oldPassword);

    if (!correctPassword) {
      return {
        error: "Invalid password",
      };
    }

    user.password = newPassword;
    await user.save();

    return {
      success: "Password updated successfully",
      error: null,
    };
  },
  outputFields: {
    ...errorField,
    ...successField,
  },
});
