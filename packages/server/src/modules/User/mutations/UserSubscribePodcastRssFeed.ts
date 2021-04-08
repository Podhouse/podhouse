import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import Parser from "rss-parser";

import UserType from "../UserType";
import * as UserLoader from "../UserLoader";

import PodcastModel, { IPodcast } from "../../Podcast/PodcastModel";

import parsePodcastFeed from "../../../utils/parsePodcastFeed";
import searchPodcastOnItunes from "../../../utils/searchPodcastOnItunes";
import saveEpisodeToDatabase from "../../../utils/saveEpisodeToDatabase";

import { errorField, successField } from "../../../common/";
import { GraphQLContext, Podcast, FeedPodcast } from "../../../types";

const parser = new Parser();

type UserSubscribePodcastUsingRssFeedArgs = {
  rss: string;
};

export default mutationWithClientMutationId({
  name: "UserSubscribePodcastUsingRssFeed",
  inputFields: {
    rss: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { rss }: UserSubscribePodcastUsingRssFeedArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        _id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    const podcastsExists: boolean = await PodcastModel.exists({ rss: rss });

    if (podcastsExists === true) {
      const podcast: IPodcast = await PodcastModel.findOne({ rss: rss });

      const subscribedToPodcast: boolean = user.subscriptions.includes(
        podcast._id as any,
      );

      if (subscribedToPodcast === true) {
        return {
          _id: user._id,
          error: "Already subscribed to podcast",
          success: null,
        };
      } else {
        user.subscriptions.push(podcast._id.toString());
        await user.save();

        return {
          _id: user._id,
          error: null,
          success: "Subscribed to podcast succcessfully",
        };
      }
    } else {
      const { title } = await parser.parseURL(rss);

      const podcastFromItunes: Podcast = await searchPodcastOnItunes(title);

      const podcast: IPodcast = await new PodcastModel(
        podcastFromItunes,
      ).save();

      const {
        description,
        episodes,
        website,
        owner,
      }: FeedPodcast = await parsePodcastFeed(rss, podcast._id);

      podcast.description = description;
      podcast.website = website;
      podcast.owner = owner;

      await podcast.save();

      await saveEpisodeToDatabase(episodes);

      user.subscriptions.push(podcast._id.toString());
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
