import { GraphQLObjectType, GraphQLString } from "graphql";

const ProviderType: GraphQLObjectType = new GraphQLObjectType({
  name: "Provider",
  description: "Provider",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: ({ id }) => id,
    },
    provider: {
      type: GraphQLString,
      resolve: ({ provider }) => provider,
    },
  }),
});

export default ProviderType;
