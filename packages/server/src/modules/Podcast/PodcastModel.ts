import mongoose, { Schema, Document, Model } from "mongoose";

import { IEpisode } from "../Episode/EpisodeModel";

const PodcastSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    rss: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    episode: {
      type: String,
      required: true,
    },
    genres: [
      {
        type: String,
        required: true,
      },
    ],
    genresIds: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    collection: "Podcast",
  },
);

export interface IPodcast extends Document {
  name: string;
  author: string;
  description: string;
  website: string;
  rss: string;
  image: string;
  episodes: Array<IEpisode>;
  genres: Array<string>;
  genreIds: Array<string>;
}

const PodcastModel: Model<IPodcast> = mongoose.model("Podcast", PodcastSchema);

export default PodcastModel;
