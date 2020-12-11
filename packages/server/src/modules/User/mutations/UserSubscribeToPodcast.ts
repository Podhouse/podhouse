import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import * as UserLoader from "../UserLoader";

import { UserConnection } from "../UserType";

import { GraphQLContext } from "../../../types";

type UserSubscribePodcastArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "UserSubscribeToPodcast",
  inputFields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { _id }: UserSubscribePodcastArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        error: "User not authenticated",
      };
    }

    const subscribedToPodcast = user.subscriptions.includes(_id as any);

    if (subscribedToPodcast === true) {
      return {
        message: null,
        error: "Already subscribed to podcast",
      };
    } else {
      user.subscriptions.push(_id as any);
      await user.save();

      return {
        message: "Subscribed successfully",
        error: null,
      };
    }
  },
  outputFields: {
    user: {
      type: UserConnection.edgeType,
      resolve: async (root, _, context) => {
        // Load new edge from loader
        const currentUser = await UserLoader.load(context, context.user?._id);

        // Returns null if no node was loaded
        if (!currentUser) {
          return null;
        }

        return {
          cursor: toGlobalId("User", currentUser._id),
          node: currentUser,
        };
      },
    },
  },
});
