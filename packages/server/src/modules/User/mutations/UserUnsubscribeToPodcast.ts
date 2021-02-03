import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import * as UserLoader from "../UserLoader";

import { UserConnection } from "../UserType";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common/";

type UserUnsubscribeToPodcastArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "UserUnsubscribeToPodcast",
  inputFields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { _id }: UserUnsubscribeToPodcastArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        _id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    const subscribedToPodcast = user.subscriptions.includes(_id as any);

    if (subscribedToPodcast === true) {
      const podcastIdIndex = user.subscriptions.indexOf(_id as any);
      const subscriptions = user.subscriptions.filter(
        (_, index) => index !== podcastIdIndex,
      );

      user.subscriptions = subscriptions;
      await user.save();

      return {
        _id: user._id,
        error: null,
        success: "Unsubscribed to podcast successfully!",
      };
    } else {
      return {
        _id: user._id,
        error: "You're not subscribed to this podcast",
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
