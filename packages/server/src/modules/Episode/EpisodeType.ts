import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { globalIdField, connectionDefinitions } from "graphql-relay";

import { nodeInterface } from "../Node/TypeRegister";

import { IEpisode } from "./EpisodeModel";

import { GraphQLContext } from "../../types";

const EpisodeType: GraphQLObjectType = new GraphQLObjectType<
  IEpisode,
  GraphQLContext
>({
  name: "Episode",
  description: "EpisodeType",
  fields: () => ({
    id: globalIdField("Episode"),
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
  }),
  interfaces: () => [nodeInterface],
});

export default EpisodeType;

export const EpisodeConnection = connectionDefinitions({
  name: "Episode",
  nodeType: EpisodeType,
});
