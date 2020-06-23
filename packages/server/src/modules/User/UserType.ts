import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";
import { globalIdField } from "graphql-relay";

import { NodeInterface } from "../../common/nodeInterface";

const UserType = new GraphQLObjectType({
  name: "UserType",
  description: "User type",
  fields: () => ({
    id: globalIdField("UserType"),
    _id: {
      type: GraphQLInt,
      resolve: ({ id }) => id,
    },
    email: {
      type: GraphQLString,
      resolve: ({ email }) => email,
    },
  }),
  interfaces: () => [NodeInterface],
});

export default UserType;
