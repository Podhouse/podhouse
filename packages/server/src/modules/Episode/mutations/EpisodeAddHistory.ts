import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import { EpisodeConnection } from "../EpisodeType";
import * as EpisodeLoader from "../EpisodeLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common";

type EpisodeAddHistoryArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "EpisodeAddHistory",
  inputFields: {
    _id: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { _id }: EpisodeAddHistoryArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        _id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    user.history.push(_id as any);
    await user.save();

    return {
      _id: user._id,
      error: null,
      success: "Episode added to history successfully",
    };
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
