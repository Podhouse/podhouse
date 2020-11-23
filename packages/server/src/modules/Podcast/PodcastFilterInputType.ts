import { GraphQLInputObjectType, GraphQLString } from "graphql";

import { FILTER_CONDITION_TYPE } from "@entria/graphql-mongo-helpers";

import escapeRegex from "../../utils/escapeRegex";

export const podcastFilterMapping = {
  primaryGenre: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => new RegExp(`^${escapeRegex(val)}`),
  },
  name: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => new RegExp(`^${escapeRegex(val)}`),
  },
};

const PodcastFilterInputType = new GraphQLInputObjectType({
  name: "PodcastFilter",
  description: "Used to filter podcasts",
  fields: () => ({
    primaryGenre: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
  }),
});

export default PodcastFilterInputType;
