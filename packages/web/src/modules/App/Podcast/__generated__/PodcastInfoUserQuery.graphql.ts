/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserSubscribedInput = {
  _id: string;
};
export type PodcastInfoUserQueryVariables = {
  input: UserSubscribedInput;
};
export type PodcastInfoUserQueryResponse = {
  readonly currentUser: {
    readonly id: string;
    readonly _id: string;
    readonly subscribed: boolean;
  } | null;
};
export type PodcastInfoUserQuery = {
  readonly response: PodcastInfoUserQueryResponse;
  readonly variables: PodcastInfoUserQueryVariables;
};

/*
query PodcastInfoUserQuery(
  $input: UserSubscribedInput!
) {
  currentUser {
    id
    _id
    subscribed(input: $input)
  }
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "input",
      },
    ],
    v1 = [
      {
        alias: null,
        args: null,
        concreteType: "User",
        kind: "LinkedField",
        name: "currentUser",
        plural: false,
        selections: [
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
            name: "_id",
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "input",
                variableName: "input",
              },
            ],
            kind: "ScalarField",
            name: "subscribed",
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "PodcastInfoUserQuery",
      selections: v1 /*: any*/,
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "PodcastInfoUserQuery",
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: "83663d6a6d58f1b13b02bfd86a1fdd53",
      id: null,
      metadata: {},
      name: "PodcastInfoUserQuery",
      operationKind: "query",
      text:
        "query PodcastInfoUserQuery(\n  $input: UserSubscribedInput!\n) {\n  currentUser {\n    id\n    _id\n    subscribed(input: $input)\n  }\n}\n",
    },
  };
})();
(node as any).hash = "bf302bb6fb896d385b4d808061596dbd";
export default node;
