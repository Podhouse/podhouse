/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PodcastInfoQueryVariables = {};
export type PodcastInfoQueryResponse = {
  readonly currentUser: {
    readonly " $fragmentRefs": FragmentRefs<"useAuthUser_user">;
  } | null;
};
export type PodcastInfoQuery = {
  readonly response: PodcastInfoQueryResponse;
  readonly variables: PodcastInfoQueryVariables;
};

/*
query PodcastInfoQuery {
  currentUser {
    ...useAuthUser_user
    id
  }
}

fragment useAuthUser_user on User {
  _id
  id
  email
  createdAt
  updatedAt
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "_id",
      storageKey: null,
    },
    {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    },
    {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "email",
      storageKey: null,
    },
    {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "createdAt",
      storageKey: null,
    },
    {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "updatedAt",
      storageKey: null,
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PodcastInfoQuery",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "currentUser",
          plural: false,
          selections: [
            {
              kind: "InlineDataFragmentSpread",
              name: "useAuthUser_user",
              selections: v0 /*: any*/,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "PodcastInfoQuery",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "currentUser",
          plural: false,
          selections: v0 /*: any*/,
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: "0570a6aaf2b056cf819a0ad4e7eae061",
      id: null,
      metadata: {},
      name: "PodcastInfoQuery",
      operationKind: "query",
      text:
        "query PodcastInfoQuery {\n  currentUser {\n    ...useAuthUser_user\n    id\n  }\n}\n\nfragment useAuthUser_user on User {\n  _id\n  id\n  email\n  createdAt\n  updatedAt\n}\n",
    },
  };
})();
(node as any).hash = "a36efcf1fbf69416f3e2a296e815859f";
export default node;
