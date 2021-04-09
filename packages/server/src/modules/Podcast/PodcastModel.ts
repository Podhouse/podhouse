import mongoose, { Schema, Document, Model, Types } from "mongoose";

const PodcastSchema = new Schema(
  {
    appleId: {
      type: Number,
    },
    name: {
      type: String,
    },
    author: {
      type: String,
    },
    description: {
      type: String,
    },
    website: {
      type: String,
    },
    rss: {
      type: String,
    },
    image: {
      type: String,
    },
    hashedImage: {
      type: String,
    },
    country: {
      type: String,
    },
    primaryGenre: {
      type: String,
    },
    genres: [
      {
        type: String,
      },
    ],
    genreIds: [
      {
        type: String,
      },
    ],
    owner: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
    },
  },
  {
    collection: "Podcast",
  },
);

PodcastSchema.index({
  name: "text",
  author: "text",
  country: "text",
  primaryGenre: "text",
});

export interface IPodcast extends Document {
  _id: Types.ObjectId;
  appleId: number;
  name: string;
  author: string;
  description: string;
  website: string;
  rss: string;
  image: string;
  hashedImage: string;
  country: string;
  primaryGenre: string;
  genres: Array<string>;
  genreIds: Array<string>;
  owner: {
    name: string;
    email: string;
  };
}

const PodcastModel: Model<IPodcast> = mongoose.model("Podcast", PodcastSchema);

export default PodcastModel;
