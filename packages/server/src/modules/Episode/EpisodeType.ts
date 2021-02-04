import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { globalIdField } from "graphql-relay";

import { load } from "./EpisodeLoader";

import PodcastType from "../Podcast/PodcastType";
import * as PodcastLoader from "../Podcast/PodcastLoader";

import { nodeInterface, registerTypeLoader } from "../Node/TypeRegister";

import { connectionDefinitions, mongooseIDResolver } from "../../common/";

const OwnerType: GraphQLObjectType = new GraphQLObjectType({
  name: "Owner",
  description: "OwnerType",
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: ({ name }) => name,
    },
    email: {
      type: GraphQLString,
      resolve: ({ email }) => email,
    },
  }),
});

const EpisodeType: GraphQLObjectType = new GraphQLObjectType({
  name: "Episode",
  description: "EpisodeType",
  fields: () => ({
    id: globalIdField("Episode"),
    ...mongooseIDResolver,
    title: {
      type: GraphQLString,
      resolve: ({ title }) => title,
    },
    description: {
      type: GraphQLString,
      resolve: ({ description }) => description,
    },
    publishedDate: {
      type: GraphQLString,
      resolve: ({ publishedDate }) => publishedDate,
    },
    link: {
      type: GraphQLString,
      resolve: ({ link }) => link,
    },
    image: {
      type: GraphQLString,
      resolve: ({ image }) => image,
    },
    audio: {
      type: GraphQLString,
      resolve: ({ audio }) => audio,
    },
    guid: {
      type: GraphQLString,
      resolve: ({ guid }) => guid,
    },
    duration: {
      type: GraphQLString,
      resolve: ({ duration }) => duration,
    },
    generator: {
      type: GraphQLString,
      resolve: ({ generator }) => generator,
    },
    owner: {
      type: OwnerType,
      resolve: ({ owner }) => owner,
    },
    podcast: {
      type: PodcastType,
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
