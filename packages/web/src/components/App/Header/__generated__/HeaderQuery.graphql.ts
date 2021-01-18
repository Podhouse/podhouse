/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HeaderQueryVariables = {};
export type HeaderQueryResponse = {
  readonly currentUser: {
    readonly _id: string;
  } | null;
};
export type HeaderQuery = {
  readonly response: HeaderQueryResponse;
  readonly variables: HeaderQueryVariables;
};

/*
query HeaderQuery {
  currentUser {
    _id
    id
  }
}
*/

const node: ConcreteRequest = (function () {
  var v0 = {
    alias: null,
    args: null,
    kind: "ScalarField",
    name: "_id",
    storageKey: null,
  };
  return {
    fragment: {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "HeaderQuery",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "currentUser",
          plural: false,
          selections: [v0 /*: any*/],
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
      name: "HeaderQuery",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "currentUser",
          plural: false,
          selections: [
            v0 /*: any*/,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: "5e3c2f9a0925b4f336d7b9677116359c",
      id: null,
      metadata: {},
      name: "HeaderQuery",
      operationKind: "query",
      text: "query HeaderQuery {\n  currentUser {\n    _id\n    id\n  }\n}\n",
    },
  };
})();
(node as any).hash = "7b105947967f08432163113577c8d032";
export default node;
