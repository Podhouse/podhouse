import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserType from "../UserType";
import * as UserLoader from "../UserLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common";

type UserAddHistoryArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "UserAddHistory",
  inputFields: {
    _id: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { _id }: UserAddHistoryArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    user.history.push(_id as any);
    await user.save();

    return {
      id: user._id,
      error: null,
      success: "Episode added to history successfully",
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
