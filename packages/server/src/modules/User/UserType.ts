import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";
import { globalIdField } from "graphql-relay";

import { nodeInterface } from "../../interface/nodeInterface";

const UserType = new GraphQLObjectType({
  name: "UserType",
  description: "User type",
  fields: () => ({
    id: globalIdField("UserType"),
    _id: {
      type: GraphQLInt,
      resolve: (user) => user._id,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email,
    },
  }),
  interfaces: () => [nodeInterface],
});

export default UserType;
