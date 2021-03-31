import { GraphQLInt, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserType from "../UserType";
import * as UserLoader from "../UserLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common";

type UserRemoveHistoryArgs = {
  index: number;
};

export default mutationWithClientMutationId({
  name: "UserRemoveHistory",
  inputFields: {
    index: {
      type: GraphQLNonNull(GraphQLInt),
    },
  },
  mutateAndGetPayload: async (
    { index }: UserRemoveHistoryArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    const arrayHasIndex = user.history.hasOwnProperty(index);

    if (arrayHasIndex === true) {
      const history = user.history.filter((_, index) => index !== index);

      user.history = history;
      await user.save();

      return {
        id: user._id,
        error: null,
        success: "Episode removed from history successfully!",
      };
    } else {
      return {
        id: user._id,
        error: "Episode does not exist on history",
        success: null,
      };
    }
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
