import mongoose, { Schema, Document, Model, Types } from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const EpisodeSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    publishedDate: {
      type: String,
    },
    link: {
      type: String,
    },
    image: {
      type: String,
    },
    guid: {
      type: String,
    },
    audio: {
      type: String,
    },
    duration: {
      type: String,
    },
    generator: {
      type: String,
    },
    owner: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
    },
    podcast: {
      type: ObjectId,
      ref: "Podcast",
      description: "Podcast this episode is attached to",
      required: true,
      index: true,
    },
  },
  {
    collection: "Episode",
  },
);

export interface IEpisode extends Document {
  title: string;
  description: string;
  publishedDate: string;
  link: string;
  image: string;
  audio: string;
  guid: string;
  duration: string;
  generator: string;
  owner: {
    name: string;
    email: string;
  };
  podcast: Types.ObjectId;
}

const EpisodeModel: Model<IEpisode> = mongoose.model("Episode", EpisodeSchema);

export default EpisodeModel;
