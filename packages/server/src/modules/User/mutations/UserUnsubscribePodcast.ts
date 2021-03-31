import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserType from "../UserType";
import * as UserLoader from "../UserLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common";

type UserUnsubscribePodcastArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "UserUnsubscribePodcast",
  inputFields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { _id }: UserUnsubscribePodcastArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        id: null,
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
        id: user._id,
        error: null,
        success: "Unsubscribed to podcast successfully!",
      };
    } else {
      return {
        id: user._id,
        error: "You're not subscribed to this podcast",
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
