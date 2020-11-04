import { GraphQLObjectType } from "graphql";
import { fromGlobalId, nodeDefinitions } from "graphql-relay";

import User, * as UserLoader from "../User/UserLoader";
import UserType from "../User/UserType";

import Podcast, * as PodcastLoader from "../Podcast/PodcastLoader";
import PodcastType from "../Podcast/PodcastType";

import { GraphQLContext } from "../../types";

type Load = (context: GraphQLContext, id: string) => any;

type TypeLoaders = {
  [key: string]: {
    type: GraphQLObjectType;
    load: Load;
  };
};

const getTypeRegister = () => {
  const typesLoaders: TypeLoaders = {};

  const getTypesLoaders = () => typesLoaders;

  const registerTypeLoader = (type: GraphQLObjectType, load: Load) => {
    typesLoaders[type.name] = {
      type,
      load,
    };

    return type;
  };

  const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
    async (globalId, context: GraphQLContext) => {
      const { id, type } = fromGlobalId(globalId);
      if (type === "User") return await UserLoader.load(context, id);
      if (type === "Podcast") return await PodcastLoader.load(context, id);
      return null;
    },
    (obj) => {
      if (obj instanceof User) return UserType;
      if (obj instanceof Podcast) return PodcastType;
      return null;
    },
  );

  return {
    registerTypeLoader,
    getTypesLoaders,
    nodeField,
    nodesField,
    nodeInterface,
  };
};

const {
  registerTypeLoader,
  nodeInterface,
  nodeField,
  nodesField,
} = getTypeRegister();

export { registerTypeLoader, nodeInterface, nodeField, nodesField };
