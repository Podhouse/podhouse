import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from "graphql";
import { globalIdField } from "graphql-relay";

import PodcastType from "../Podcast/PodcastType";
import NotificationsType from "../Notifications/NotificationsType";

const UserType = new GraphQLObjectType({
  name: "UserType",
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
    subscriptions: {
      type: new GraphQLList(PodcastType),
      resolve: ({ email }) => email,
    },
    notifications: {
      type: NotificationsType,
      resolve: ({ notifications }) => notifications,
    },
  }),
});

export default UserType;
