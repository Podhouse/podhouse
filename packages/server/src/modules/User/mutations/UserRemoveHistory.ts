import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import remove from "lodash.remove";

import UserType from "../UserType";
import * as UserLoader from "../UserLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common";

type UserRemoveHistoryArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "UserRemoveHistory",
  inputFields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { _id }: UserRemoveHistoryArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    const newHistory = remove(user.history, (el) => {
      return el._id.toString() !== _id;
    });

    user.history = newHistory;
    await user.save();

    return {
      id: user._id,
      error: "Episode removed from history successfully!",
      success: null,
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