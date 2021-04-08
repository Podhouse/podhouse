import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserType from "../UserType";
import * as UserLoader from "../UserLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common";

type UserAddFavoriteEpisodeArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "UserAddFavoriteEpisode",
  inputFields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { _id }: UserAddFavoriteEpisodeArgs,
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
      const episode = {
        _id: _id as any,
        date: Date.now(),
      };

      user.favorites.push(episode);
      await user.save();

      return {
        id: user._id,
        error: null,
        success: "Episode favorited successfully!",
      };
    } else {
      return {
        id: user._id,
        error: "Episode already favorited",
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
