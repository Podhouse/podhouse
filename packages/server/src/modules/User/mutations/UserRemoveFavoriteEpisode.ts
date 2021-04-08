import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import remove from "lodash.remove";

import UserType from "../UserType";
import * as UserLoader from "../UserLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common";

type UserRemoveFavoriteEpisodeArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "UserRemoveFavoriteEpisode",
  inputFields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { _id }: UserRemoveFavoriteEpisodeArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    const hasFavoritedEpisode: number = user.favorites.findIndex(
      (el) => el._id.toString() === _id,
    );

    if (hasFavoritedEpisode === -1) {
      return {
        id: user._id,
        error: "Episode was not favorited",
        success: null,
      };
    } else {
      const newHistory = remove(user.favorites, (el) => {
        return el._id.toString() !== _id;
      });

      user.favorites = newHistory;
      await user.save();

      return {
        id: user._id,
        error: null,
        success: "Episode removed from favorites successfully!",
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
