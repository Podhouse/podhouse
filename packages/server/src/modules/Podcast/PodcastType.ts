import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
} from "graphql";
import { globalIdField } from "graphql-relay";

import { load } from "./PodcastLoader";

import * as EpisodeLoader from "../Episode/EpisodeLoader";
import { EpisodeConnection } from "../Episode/EpisodeType";

import { nodeInterface, registerTypeLoader } from "../Node/TypeRegister";

import {
  connectionArgs,
  connectionDefinitions,
  mongooseIDResolver,
  withFilter,
} from "../../common/";

const PodcastType: GraphQLObjectType = new GraphQLObjectType({
  name: "Podcast",
  description: "PodcastType",
  fields: () => ({
    id: globalIdField("Podcast"),
    ...mongooseIDResolver,
    appleId: {
      type: GraphQLNonNull(GraphQLInt),
      resolve: ({ appleId }) => appleId,
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ name }) => name,
    },
    author: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ author }) => author,
    },
    description: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ description }) => description,
    },
    website: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ website }) => website,
    },
    rss: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ rss }) => rss,
    },
    image: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ image }) => image,
    },
    episodes: {
      type: GraphQLNonNull(EpisodeConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: async (podcast, args, context) =>
        await EpisodeLoader.loadAll(
          context,
          withFilter(args, { podcast: podcast._id }),
        ),
    },
    country: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ country }) => country,
    },
    primaryGenre: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ primaryGenre }) => primaryGenre,
    },
    genres: {
      type: GraphQLList(GraphQLString),
      resolve: ({ genres }) => genres,
    },
    genreIds: {
      type: GraphQLList(GraphQLString),
      resolve: ({ genreIds }) => genreIds,
    },
  }),
  interfaces: () => [nodeInterface],
});

export default PodcastType;

registerTypeLoader(PodcastType, load);

export const PodcastConnection = connectionDefinitions({
  name: "Podcast",
  nodeType: PodcastType,
});
