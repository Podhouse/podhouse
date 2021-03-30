import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import { EpisodeConnection } from "../EpisodeType";
import * as EpisodeLoader from "../EpisodeLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common/";

type EpisodeFavoriteArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "EpisodeFavorite",
  inputFields: {
    _id: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { _id }: EpisodeFavoriteArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        _id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    const hasFavoritedEpisode: boolean = user.favorites.includes(_id as any);

    if (hasFavoritedEpisode === true) {
      return {
        _id: user._id,
        error: "You've already favorited this episode",
        success: null,
      };
    } else {
      user.favorites.push(_id as any);
      await user.save();

      return {
        _id: user._id,
        error: null,
        success: "Episode favorited successfully!",
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
