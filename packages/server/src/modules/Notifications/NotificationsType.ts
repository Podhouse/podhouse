import { GraphQLObjectType, GraphQLBoolean } from "graphql";

const NotificationsType = new GraphQLObjectType({
  name: "NotificationsType",
  fields: () => ({
    weekly: {
      type: GraphQLBoolean,
      resolve: ({ weekly }) => weekly,
    },
    news: {
      type: GraphQLBoolean,
      resolve: ({ news }) => news,
    },
  }),
});

export default NotificationsType;
