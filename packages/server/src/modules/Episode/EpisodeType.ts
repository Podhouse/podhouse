import { GraphQLObjectType, GraphQLString } from "graphql";

const EpisodeType = new GraphQLObjectType({
  name: "EpisodeType",
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

export default EpisodeType;
