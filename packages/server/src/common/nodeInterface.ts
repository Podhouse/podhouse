import { fromGlobalId, nodeDefinitions } from "graphql-relay";
import { GraphQLObjectType } from "graphql";

import * as loaders from "../loaders";
import { Loader, Loaders, GraphQLContext, RegisteredTypes } from "./types";

const registeredTypes: RegisteredTypes = {};

export const registerType = (type: GraphQLObjectType) => {
  registeredTypes[type.name] = type;
  return type;
};

export const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
  (globalId, context: GraphQLContext) => {
    const { type, id } = fromGlobalId(globalId);
    const loader: Loader = (loaders as Loaders)[`${type}Loader`];
    return (loader && loader.load(context, id)) || null;
  },
  (obj: Record<string, any>) => registeredTypes[obj.constructor.name] || null,
);

export const NodeInterface = nodeInterface;
export const NodeField = nodeField;
export const NodesField = nodesField;
