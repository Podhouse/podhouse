import mongoose, { Schema, Document, Model } from "mongoose";

const EpisodeSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  publishedDate: {
    type: String,
    trim: true,
    required: true,
  },
  link: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
  audio: {
    type: String,
    trim: true,
    required: true,
  },
  duration: {
    type: String,
    trim: true,
    required: true,
  },
});

export interface IEpisode extends Document {
  title: string;
  description: string;
  publishedDate: string;
  link: string;
  image: string;
  audio: string;
  duration: string;
}

const EpisodeModel: Model<IEpisode> = mongoose.model("Episode", EpisodeSchema);

export default EpisodeModel;
