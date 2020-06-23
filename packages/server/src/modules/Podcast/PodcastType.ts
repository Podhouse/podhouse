import { GraphQLObjectType, GraphQLString } from "graphql";

const PodcastType = new GraphQLObjectType({
  name: "PodcastType",
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: ({ name }) => name,
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
