import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import { GraphQLContext } from "../../../types";

import PodcastModel from "../../Podcast/PodcastModel";

import getObjectId from "../../../utils/getObjectId";
import UserType from "../UserType";
import * as UserLoader from "../UserLoader";

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

    const podcast = await PodcastModel.findOne({
      _id: getObjectId(podcastId),
    });

    user.subscriptions.push(podcast);
    user.save();

    return {
      user,
      message: "Subscribed to podcast successfully",
      error: null,
    };
  },
  outputFields: {
    user: {
      type: UserType,
      resolve: async ({ id }, _, context) => {
        return await UserLoader.load(context, id);
      },
    },
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
