import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { globalIdField, connectionFromArray } from "graphql-relay";

import { IUser } from "./UserModel";
import { load } from "./UserLoader";

import { PodcastConnection } from "../Podcast/PodcastType";

import { nodeInterface, registerTypeLoader } from "../Node/TypeRegister";

import {
  connectionDefinitions,
  connectionArgs,
  mongooseIDResolver,
} from "../../common/";

import { GraphQLContext } from "../../types";
import { IPodcast } from "../Podcast/PodcastModel";

const UserType: GraphQLObjectType = new GraphQLObjectType<
  IUser,
  GraphQLContext
>({
  name: "User",
  description: "UserType",
  fields: () => ({
    id: globalIdField("User"),
    ...mongooseIDResolver,
    email: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ email }) => email,
    },
    subscriptions: {
      type: GraphQLNonNull(PodcastConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: async (user, args, context) => {
        const podcasts: Array<
          IPodcast | Error
        > = await context.dataloaders.PodcastLoader.loadMany(
          user.subscriptions.map((id) => id.toString()),
        );
        console.log(connectionFromArray(podcasts, args));
        return connectionFromArray(podcasts, args);
      },
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLString),
      resolve: (obj) => (obj.createdAt ? obj.createdAt.toISOString() : null),
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLString),
      resolve: (obj) => (obj.updatedAt ? obj.updatedAt.toISOString() : null),
    },
  }),
  interfaces: () => [nodeInterface],
});

export default UserType;

registerTypeLoader(UserType, load);

export const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: UserType,
});
