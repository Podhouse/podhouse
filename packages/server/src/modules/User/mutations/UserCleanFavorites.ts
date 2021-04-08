import { mutationWithClientMutationId } from "graphql-relay";

import UserType from "../UserType";
import * as UserLoader from "../UserLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common";

export default mutationWithClientMutationId({
  name: "UserCleanFavorites",
  inputFields: {},
  mutateAndGetPayload: async (args, { user }: GraphQLContext) => {
    if (!user) {
      return {
        id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    user.favorites = [];
    await user.save();

    return {
      id: user._id,
      error: null,
      success: "Favorites cleaned successfully",
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
