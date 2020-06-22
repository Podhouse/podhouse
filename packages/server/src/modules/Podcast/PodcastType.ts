import { GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField } from "graphql-relay";

const PodcastType = new GraphQLObjectType({
  name: "PodcastType",
  fields: () => ({
    id: globalIdField("Podcast"),
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

export default PodcastType;
