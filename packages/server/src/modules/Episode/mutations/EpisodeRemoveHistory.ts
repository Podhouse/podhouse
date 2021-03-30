import { GraphQLInt, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import { EpisodeConnection } from "../EpisodeType";
import * as EpisodeLoader from "../EpisodeLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common";

type EpisodeRemoveHistoryArgs = {
  index: number;
};

export default mutationWithClientMutationId({
  name: "EpisodeRemoveHistory",
  inputFields: {
    index: {
      type: GraphQLNonNull(GraphQLInt),
    },
  },
  mutateAndGetPayload: async (
    { index }: EpisodeRemoveHistoryArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        _id: null,
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
        _id: user._id,
        error: null,
        success: "Episode removed from history successfully!",
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
