/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserSubscribeToPodcastInput = {
  _id: string;
  clientMutationId?: string | null;
};
export type UserSubscribedInput = {
  _id?: string | null;
};
export type PodcastUserSubscribeToPodcastMutationVariables = {
  input: UserSubscribeToPodcastInput;
  subscribedInput: UserSubscribedInput;
};
export type PodcastUserSubscribeToPodcastMutationResponse = {
  readonly UserSubscribeToPodcast: {
    readonly error: string | null;
    readonly user: {
      readonly node: {
        readonly subscribed: boolean | null;
      } | null;
    } | null;
  } | null;
};
export type PodcastUserSubscribeToPodcastMutation = {
  readonly response: PodcastUserSubscribeToPodcastMutationResponse;
  readonly variables: PodcastUserSubscribeToPodcastMutationVariables;
};

/*
mutation PodcastUserSubscribeToPodcastMutation(
  $input: UserSubscribeToPodcastInput!
  $subscribedInput: UserSubscribedInput!
) {
  UserSubscribeToPodcast(input: $input) {
    error
    user {
      node {
        subscribed(input: $subscribedInput)
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
        name: "subscribedInput",
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
          variableName: "subscribedInput",
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
      name: "PodcastUserSubscribeToPodcastMutation",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: "UserSubscribeToPodcastPayload",
          kind: "LinkedField",
          name: "UserSubscribeToPodcast",
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
      name: "PodcastUserSubscribeToPodcastMutation",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: "UserSubscribeToPodcastPayload",
          kind: "LinkedField",
          name: "UserSubscribeToPodcast",
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
      cacheID: "ad18e6123cac7b09a8c2691988f39369",
      id: null,
      metadata: {},
      name: "PodcastUserSubscribeToPodcastMutation",
      operationKind: "mutation",
      text:
        "mutation PodcastUserSubscribeToPodcastMutation(\n  $input: UserSubscribeToPodcastInput!\n  $subscribedInput: UserSubscribedInput!\n) {\n  UserSubscribeToPodcast(input: $input) {\n    error\n    user {\n      node {\n        subscribed(input: $subscribedInput)\n        id\n      }\n    }\n  }\n}\n",
    },
  };
})();
(node as any).hash = "0f2654b4ef153ce80ad58acac2af58af";
export default node;
