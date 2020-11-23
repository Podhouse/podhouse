import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { globalIdField } from "graphql-relay";

import { load } from "./EpisodeLoader";
import { IEpisode } from "./EpisodeModel";

import PodcastType from "../Podcast/PodcastType";
import * as PodcastLoader from "../Podcast/PodcastLoader";

import { nodeInterface, registerTypeLoader } from "../Node/TypeRegister";

import {
  connectionDefinitions,
  mongooseIDResolver,
  withFilter,
} from "../../common/";

import { GraphQLContext } from "../../types";

const EpisodeType: GraphQLObjectType = new GraphQLObjectType<
  IEpisode,
  GraphQLContext
>({
  name: "Episode",
  description: "EpisodeType",
  fields: () => ({
    id: globalIdField("Episode"),
    ...mongooseIDResolver,
    title: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ title }) => title,
    },
    description: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ description }) => description,
    },
    publishedDate: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ publishedDate }) => publishedDate,
    },
    link: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ link }) => link,
    },
    image: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ image }) => image,
    },
    audio: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ audio }) => audio,
    },
    duration: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ duration }) => duration,
    },
    podcast: {
      type: GraphQLNonNull(PodcastType),
      resolve: async ({ podcast }, args, context) =>
        await PodcastLoader.load(context, podcast),
    },
  }),
  interfaces: () => [nodeInterface],
});

export default EpisodeType;

registerTypeLoader(EpisodeType, load);

export const EpisodeConnection = connectionDefinitions({
  name: "Episode",
  nodeType: EpisodeType,
});
