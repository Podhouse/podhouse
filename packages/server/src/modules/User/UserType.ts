import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { globalIdField } from "graphql-relay";

import { NodeInterface } from "../../interface/NodeInterface";

import NotificationsType from "../Notifications/NotificationsType";

const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: "User",
  description: "User data",
  fields: () => ({
    id: globalIdField("User"),
    _id: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ _id }) => _id,
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ email }) => email,
    },
    notifications: {
      type: NotificationsType,
      resolve: ({ notifications }) => notifications,
    }
  }),
  interfaces: () => [NodeInterface],
});

export default UserType;
