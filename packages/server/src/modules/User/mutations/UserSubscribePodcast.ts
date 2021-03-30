import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserType from "../UserType";
import * as UserLoader from "../UserLoader";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common";

type UserSubscribePodcastArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "UserSubscribePodcast",
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
        user: null,
        error: "User not authenticated",
        success: null,
      };
    }

    const subscribedToPodcast = user.subscriptions.includes(_id as any);

    if (subscribedToPodcast === true) {
      return {
        user: null,
        error: "Already subscribed to podcast",
        success: null,
      };
    } else {
      user.subscriptions.push(_id as any);
      await user.save();

      return {
        _id: user._id,
        error: null,
        success: "Subscribed to podcast succcessfully",
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
