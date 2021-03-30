import { GraphQLID, GraphQLInputObjectType, GraphQLString } from "graphql";
import { FILTER_CONDITION_TYPE } from "@entria/graphql-mongo-helpers";

import { getObjectId } from "../../common/";

import escapeRegex from "../../utils/escapeRegex";

export const episodeFilterMapping = {
  title: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => new RegExp(`^${escapeRegex(val)}`),
  },
  description: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => new RegExp(`^${escapeRegex(val)}`),
  },
  podcast: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => val && getObjectId(val),
  },
};

const EpisodeFilterInputType = new GraphQLInputObjectType({
  name: "EpisodeFilter",
  description: "Used to filter episodes",
  fields: () => ({
    title: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    podcast: {
      type: GraphQLID,
    },
  }),
});

export default EpisodeFilterInputType;
