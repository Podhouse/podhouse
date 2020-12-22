import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import * as UserLoader from "../UserLoader";

import { UserConnection } from "../UserType";

import { GraphQLContext } from "../../../types";

type UserSubscribePodcastArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "UserUnfavoriteEpisode",
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

    const subscribedToPodcast = user.favorites.includes(_id as any);

    if (subscribedToPodcast === true) {
      const podcastIdIndex = user.favorites.indexOf(_id as any);
      const favorites = user.favorites.filter(
        (_, index) => index !== podcastIdIndex,
      );

      user.favorites = favorites;
      await user.save();

      return {
        _id: user._id,
        error: null,
      };
    } else {
      return {
        error: "You have not favorited this episode",
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
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
