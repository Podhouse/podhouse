import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import * as UserLoader from "../UserLoader";

import { UserConnection } from "../UserType";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common/";

type UserUnfavoriteEpisodeArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "UserUnfavoriteEpisode",
  inputFields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { _id }: UserUnfavoriteEpisodeArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        _id: user._id,
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
        _id: user._id,
        error: null,
        success: "Unfavorited episode successfully!",
      };
    } else {
      return {
        _id: user._id,
        error: "You have not favorited this episode",
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
