import mongoose, { Schema, Document, Model, Types } from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const EpisodeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    audio: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
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
  link?: string;
  image: string;
  audio: string;
  duration: string;
  podcast: Types.ObjectId;
}

const EpisodeModel: Model<IEpisode> = mongoose.model("Episode", EpisodeSchema);

export default EpisodeModel;
