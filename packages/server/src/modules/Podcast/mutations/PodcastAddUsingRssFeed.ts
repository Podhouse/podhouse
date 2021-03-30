import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import Parser from "rss-parser";

import PodcastModel, { IPodcast } from "../../Podcast/PodcastModel";

import parsePodcastFeed from "../../../utils/parsePodcastFeed";
import searchPodcastOnItunes from "../../../utils/searchPodcastOnItunes";
import saveEpisodeToDatabase from "../../../utils/saveEpisodeToDatabase";

import { errorField, successField } from "../../../common/";
import { Podcast, FeedPodcast } from "../../../types";

const parser = new Parser();

type PodcastAddUsingRssFeedArgs = {
  rss: string;
};

export default mutationWithClientMutationId({
  name: "PodcastAddUsingRssFeed",
  inputFields: {
    rss: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ rss }: PodcastAddUsingRssFeedArgs) => {
    const currentPodcast: boolean = await PodcastModel.exists({ rss: rss });

    if (currentPodcast === true) {
      return {
        error: "Podcast already exists on our database",
        success: null,
      };
    }

    const { title } = await parser.parseURL(rss);

    const podcastFromItunes: Podcast = await searchPodcastOnItunes(title);

    const podcast: IPodcast = await new PodcastModel(podcastFromItunes).save();

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

    return {
      error: null,
      success: "Added podcast to our database using RSS feed successfully!",
    };
  },
  outputFields: {
    ...errorField,
    ...successField,
  },
});
