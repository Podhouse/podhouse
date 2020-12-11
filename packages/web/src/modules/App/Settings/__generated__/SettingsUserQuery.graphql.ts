/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SettingsUserQueryVariables = {};
export type SettingsUserQueryResponse = {
  readonly currentUser: {
    readonly " $fragmentRefs": FragmentRefs<"useAuthUser_user">;
  } | null;
};
export type SettingsUserQuery = {
  readonly response: SettingsUserQueryResponse;
  readonly variables: SettingsUserQueryVariables;
};

/*
query SettingsUserQuery {
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
      name: "SettingsUserQuery",
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
      name: "SettingsUserQuery",
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
      cacheID: "d92e4800993c9aa894066d40970dde2c",
      id: null,
      metadata: {},
      name: "SettingsUserQuery",
      operationKind: "query",
      text:
        "query SettingsUserQuery {\n  currentUser {\n    ...useAuthUser_user\n    id\n  }\n}\n\nfragment useAuthUser_user on User {\n  _id\n  id\n  email\n  createdAt\n  updatedAt\n}\n",
    },
  };
})();
(node as any).hash = "73f4a3257535ef903b8943e73f32c2d6";
export default node;