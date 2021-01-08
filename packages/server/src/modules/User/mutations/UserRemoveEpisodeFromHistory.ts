import { GraphQLString, GraphQLInt, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";
import { Types } from "mongoose";

import * as UserLoader from "../UserLoader";

import { UserConnection } from "../UserType";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common";

type UserRemoveEpisodeFromHistoryArgs = {
  episodeIndex: number;
};

export default mutationWithClientMutationId({
  name: "UserRemoveEpisodeFromHistory",
  inputFields: {
    episodeIndex: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  mutateAndGetPayload: async (
    { episodeIndex }: UserRemoveEpisodeFromHistoryArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        _id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    const arrayHasIndex = user.history.hasOwnProperty(episodeIndex);

    if (arrayHasIndex === true) {
      const history = user.history.filter((_, index) => index !== episodeIndex);

      user.history = history;
      await user.save();

      return {
        _id: user._id,
        error: null,
        success: "Removed episode from history successfully!",
      };
    } else {
      return {
        _id: user._id,
        error: "Episode does not exist on history",
        success: null,
      };
    }
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
