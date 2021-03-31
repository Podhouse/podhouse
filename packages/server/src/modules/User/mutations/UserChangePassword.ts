import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserType from "../UserType";
import * as UserLoader from "../UserLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common/";

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
        id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    const correctPassword: boolean = user.authenticate(oldPassword);

    if (!correctPassword) {
      return {
        id: null,
        error: "Invalid password",
        success: null,
      };
    }

    user.password = newPassword;
    await user.save();

    return {
      id: user._id,
      success: "Password updated successfully",
      error: null,
    };
  },
  outputFields: {
    currentUser: {
      type: UserType,
      resolve: async ({ id }, _, context) => {
        return await UserLoader.load(context, id);
      },
    },
    ...errorField,
    ...successField,
  },
});
