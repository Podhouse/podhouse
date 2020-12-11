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
    readonly subscribed: boolean | null;
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
    subscribed(input: $input)
    id
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
    v1 = {
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
    };
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
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
          selections: [v1 /*: any*/],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
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
          selections: [
            v1 /*: any*/,
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
      cacheID: "9c4b3c8d59b3893a9d33acb167db7d0f",
      id: null,
      metadata: {},
      name: "PodcastInfoUserQuery",
      operationKind: "query",
      text:
        "query PodcastInfoUserQuery(\n  $input: UserSubscribedInput!\n) {\n  currentUser {\n    subscribed(input: $input)\n    id\n  }\n}\n",
    },
  };
})();
(node as any).hash = "0f46aa4ff2a9fac86494545b91502b33";
export default node;
