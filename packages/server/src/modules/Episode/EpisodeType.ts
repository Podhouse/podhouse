import { GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField } from "graphql-relay";

const EpisodeType = new GraphQLObjectType({
  name: "EpisodeType",
  fields: () => ({
    id: globalIdField("Episode"),
    name: {
      type: GraphQLString,
      resolve: ({ id }) => id,
    },
    feed: {
      type: GraphQLString,
      resolve: ({ feed }) => feed,
    },
    avatar: {
      type: GraphQLString,
      resolve: ({ avatar }) => avatar,
    },
  }),
});

export default EpisodeType;
