import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import { EpisodeConnection } from "../EpisodeType";
import * as EpisodeLoader from "../EpisodeLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common/";

type EpisodeUnfavoriteArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "EpisodeUnfavorite",
  inputFields: {
    _id: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { _id }: EpisodeUnfavoriteArgs,
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
    episode: {
      type: EpisodeConnection.edgeType,
      resolve: async ({ id }, _, context) => {
        const episode = await EpisodeLoader.load(context, id);

        if (!episode) {
          return null;
        }

        return {
          cursor: toGlobalId("Episode", episode._id),
          node: episode,
        };
      },
    },
    ...errorField,
    ...successField,
  },
});
