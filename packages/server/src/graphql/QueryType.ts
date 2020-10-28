import { GraphQLObjectType } from "graphql";

import UserType from "../modules/User/UserType";
import * as UserLoader from "../modules/User/UserLoader";

import { nodesField, nodeField } from "../modules/Node/TypeRegister";

import { GraphQLContext } from "../types";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "Query",
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    currentUser: {
      type: UserType,
      resolve: (root, args, context: GraphQLContext) =>
        UserLoader.load(context, context.user?._id),
    },
  }),
});

export default QueryType;
