import mongoose, { Schema, Document, Model } from "mongoose";

const PodcastSchema = new Schema(
  {
    appleId: {
      type: Number,
      required: true,
    },
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
    },
    rss: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    primaryGenre: {
      type: String,
      required: true,
    },
    genres: [
      {
        type: String,
        required: true,
      },
    ],
    genreIds: [
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
  appleId: number;
  name: string;
  author: string;
  description: string;
  website?: string;
  rss: string;
  image: string;
  country: string;
  primaryGenre: string;
  genres: Array<string>;
  genreIds: Array<string>;
}

const PodcastModel: Model<IPodcast> = mongoose.model("Podcast", PodcastSchema);

export default PodcastModel;
