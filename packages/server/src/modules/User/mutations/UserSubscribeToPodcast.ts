import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import { GraphQLContext } from "../../../types";

type UserSubscribePodcastArgs = {
  podcastId: string;
};

export default mutationWithClientMutationId({
  name: "UserSubscribeToPodcast",
  inputFields: {
    podcastId: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { podcastId }: UserSubscribePodcastArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        error: "User not authenticated",
      };
    }

    const subscribedToPodcast = user.subscriptions.includes(podcastId as any);

    if (subscribedToPodcast === true) {
      return {
        message: null,
        error: "Already subscribed to podcast",
      };
    } else {
      user.subscriptions.push(podcastId as any);
      await user.save();

      return {
        message: "Subscribed successfully",
        error: null,
      };
    }
  },
  outputFields: {
    message: {
      type: GraphQLString,
      resolve: ({ message }) => message,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
