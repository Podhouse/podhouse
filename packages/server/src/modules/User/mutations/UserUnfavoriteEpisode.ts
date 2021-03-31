import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserType from "../UserType";
import * as UserLoader from "../UserLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common/";

type UserUnfavoriteEpisodeArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "UserUnfavoriteEpisode",
  inputFields: {
    _id: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { _id }: UserUnfavoriteEpisodeArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    const subscribedToPodcast = user.favorites.includes(_id as any);

    if (subscribedToPodcast === true) {
      const podcastIdIndex = user.favorites.indexOf(_id as any);
      const favorites = user.favorites.filter(
        (_, index) => index !== podcastIdIndex,
      );

      user.favorites = favorites;
      await user.save();

      return {
        id: user._id,
        error: null,
        success: "Unfavorited episode successfully!",
      };
    } else {
      return {
        id: user._id,
        error: "You have not favorited this episode",
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
