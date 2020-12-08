/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PodcastInfoUserQueryVariables = {};
export type PodcastInfoUserQueryResponse = {
  readonly currentUser: {
    readonly " $fragmentRefs": FragmentRefs<"useAuthUser_user">;
  } | null;
};
export type PodcastInfoUserQuery = {
  readonly response: PodcastInfoUserQueryResponse;
  readonly variables: PodcastInfoUserQueryVariables;
};

/*
query PodcastInfoUserQuery {
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
      name: "PodcastInfoUserQuery",
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
      name: "PodcastInfoUserQuery",
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
      cacheID: "420df0cb0942fd64223b3851d61e0467",
      id: null,
      metadata: {},
      name: "PodcastInfoUserQuery",
      operationKind: "query",
      text:
        "query PodcastInfoUserQuery {\n  currentUser {\n    ...useAuthUser_user\n    id\n  }\n}\n\nfragment useAuthUser_user on User {\n  _id\n  id\n  email\n  createdAt\n  updatedAt\n}\n",
    },
  };
})();
(node as any).hash = "965e4f13f94633e7789ad2a624507a83";
export default node;
