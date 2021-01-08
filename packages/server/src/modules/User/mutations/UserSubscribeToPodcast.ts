import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import * as UserLoader from "../UserLoader";

import { UserConnection } from "../UserType";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common/";

type UserSubscribeToPodcastArgs = {
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
    { _id }: UserSubscribeToPodcastArgs,
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
