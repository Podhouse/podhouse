/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PodcastInfoQueryVariables = {
  _id: string;
};
export type PodcastInfoQueryResponse = {
  readonly userSubscribedToPodcast: boolean;
};
export type PodcastInfoQuery = {
  readonly response: PodcastInfoQueryResponse;
  readonly variables: PodcastInfoQueryVariables;
};

/*
query PodcastInfoQuery(
  $_id: ID!
) {
  userSubscribedToPodcast(_id: $_id)
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "_id",
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "_id",
            variableName: "_id",
          },
        ],
        kind: "ScalarField",
        name: "userSubscribedToPodcast",
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "PodcastInfoQuery",
      selections: v1 /*: any*/,
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "PodcastInfoQuery",
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: "38fa9be4afa05c87fc30f6f9f8c56c69",
      id: null,
      metadata: {},
      name: "PodcastInfoQuery",
      operationKind: "query",
      text:
        "query PodcastInfoQuery(\n  $_id: ID!\n) {\n  userSubscribedToPodcast(_id: $_id)\n}\n",
    },
  };
})();
(node as any).hash = "aa40117bed01c9e7854afecd8db9ae22";
export default node;
