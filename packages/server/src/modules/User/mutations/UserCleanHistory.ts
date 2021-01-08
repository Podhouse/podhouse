import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import * as UserLoader from "../UserLoader";

import { UserConnection } from "../UserType";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common";

export default mutationWithClientMutationId({
  name: "UserCleanHistory",
  inputFields: {},
  mutateAndGetPayload: async (args, { user }: GraphQLContext) => {
    if (!user) {
      return {
        _id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    user.history = [];
    await user.save();

    return {
      _id: user._id,
      error: null,
      success: "History cleaned successfully",
    };
  },
  outputFields: {
    user: {
      type: UserConnection.edgeType,
      resolve: async ({ _id }, _, context) => {
        const currentUser = await UserLoader.load(context, _id);

        if (!currentUser) {
          return null;
        }

        return {
          cursor: toGlobalId("User", currentUser._id),
          node: currentUser,
        };
      },
    },
    ...errorField,
    ...successField,
  },
});
