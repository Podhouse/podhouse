import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { globalIdField, connectionFromArray } from "graphql-relay";

import { IUser } from "./UserModel";
import { load } from "./UserLoader";

import { PodcastConnection } from "../Podcast/PodcastType";
import * as PodcastLoader from "../Podcast/PodcastLoader";

import { nodeInterface, registerTypeLoader } from "../Node/TypeRegister";

import {
  connectionDefinitions,
  connectionArgs,
  mongooseIDResolver,
} from "../../common/";

import { GraphQLContext } from "../../types";

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
        const podcasts = user.subscriptions.map((id) =>
          PodcastLoader.load(context, id.toString()),
        );
        const result = await Promise.all(podcasts).then((res) => res);
        console.log("result: ", result);
        return connectionFromArray(result, args);
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
