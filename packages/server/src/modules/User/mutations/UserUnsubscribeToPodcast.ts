import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import { GraphQLContext } from "../../../types";

type UserSubscribePodcastArgs = {
  podcastId: string;
};

export default mutationWithClientMutationId({
  name: "UserUnsubscribeToPodcast",
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
      const podcastIdIndex = user.subscriptions.indexOf(podcastId as any);
      const subscriptions = user.subscriptions.filter(
        (_, index) => index !== podcastIdIndex,
      );

      user.subscriptions = subscriptions;
      await user.save();

      return {
        message: null,
        error: "Unsubscribed successfully",
      };
    } else {
      return {
        message: null,
        error: "Already unsubscribed to podcast",
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
