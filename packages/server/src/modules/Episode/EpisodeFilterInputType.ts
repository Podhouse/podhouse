import { GraphQLID, GraphQLInputObjectType, GraphQLString } from "graphql";
import { FILTER_CONDITION_TYPE } from "@entria/graphql-mongo-helpers";

import { getObjectId } from "../../common/";

import escapeRegex from "../../utils/escapeRegex";

export const episodeFilterMapping = {
  podcast: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => val && getObjectId(val),
  },
  name: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => new RegExp(`^${escapeRegex(val)}`),
  },
};

const CommentFilterInputType = new GraphQLInputObjectType({
  name: "CommentFilter",
  description: "Used to filter episodes",
  fields: () => ({
    podcast: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
  }),
});

export default CommentFilterInputType;
