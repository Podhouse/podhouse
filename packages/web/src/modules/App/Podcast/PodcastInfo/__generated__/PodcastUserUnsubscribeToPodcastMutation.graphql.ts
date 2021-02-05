/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserUnsubscribeToPodcastInput = {
  _id: string;
  clientMutationId?: string | null;
};
export type UserSubscribedInput = {
  _id?: string | null;
};
export type PodcastUserUnsubscribeToPodcastMutationVariables = {
  input: UserUnsubscribeToPodcastInput;
  unsubscribedInput: UserSubscribedInput;
};
export type PodcastUserUnsubscribeToPodcastMutationResponse = {
  readonly UserUnsubscribeToPodcast: {
    readonly error: string | null;
    readonly user: {
      readonly node: {
        readonly subscribed: boolean | null;
      } | null;
    } | null;
  } | null;
};
export type PodcastUserUnsubscribeToPodcastMutation = {
  readonly response: PodcastUserUnsubscribeToPodcastMutationResponse;
  readonly variables: PodcastUserUnsubscribeToPodcastMutationVariables;
};

/*
mutation PodcastUserUnsubscribeToPodcastMutation(
  $input: UserUnsubscribeToPodcastInput!
  $unsubscribedInput: UserSubscribedInput!
) {
  UserUnsubscribeToPodcast(input: $input) {
    error
    user {
      node {
        subscribed(input: $unsubscribedInput)
        id
      }
    }
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
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "unsubscribedInput",
      },
    ],
    v1 = [
      {
        kind: "Variable",
        name: "input",
        variableName: "input",
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "error",
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: [
        {
          kind: "Variable",
          name: "input",
          variableName: "unsubscribedInput",
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
      name: "PodcastUserUnsubscribeToPodcastMutation",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: "UserUnsubscribeToPodcastPayload",
          kind: "LinkedField",
          name: "UserUnsubscribeToPodcast",
          plural: false,
          selections: [
            v2 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: "UserEdge",
              kind: "LinkedField",
              name: "user",
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "node",
                  plural: false,
                  selections: [v3 /*: any*/],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Mutation",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "PodcastUserUnsubscribeToPodcastMutation",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: "UserUnsubscribeToPodcastPayload",
          kind: "LinkedField",
          name: "UserUnsubscribeToPodcast",
          plural: false,
          selections: [
            v2 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: "UserEdge",
              kind: "LinkedField",
              name: "user",
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "node",
                  plural: false,
                  selections: [
                    v3 /*: any*/,
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
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: "40dadf2d5c3ba9f130ca6ca85423b27c",
      id: null,
      metadata: {},
      name: "PodcastUserUnsubscribeToPodcastMutation",
      operationKind: "mutation",
      text:
        "mutation PodcastUserUnsubscribeToPodcastMutation(\n  $input: UserUnsubscribeToPodcastInput!\n  $unsubscribedInput: UserSubscribedInput!\n) {\n  UserUnsubscribeToPodcast(input: $input) {\n    error\n    user {\n      node {\n        subscribed(input: $unsubscribedInput)\n        id\n      }\n    }\n  }\n}\n",
    },
  };
})();
(node as any).hash = "3e07faad66af4bb124634daca03692f7";
export default node;
