/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserUnsubscribeToPodcastInput = {
  podcastId: string;
  clientMutationId?: string | null;
};
export type PodcastUserUnsubscribeToPodcastMutationVariables = {
  input: UserUnsubscribeToPodcastInput;
};
export type PodcastUserUnsubscribeToPodcastMutationResponse = {
  readonly UserUnsubscribeToPodcast: {
    readonly message: string | null;
    readonly error: string | null;
  } | null;
};
export type PodcastUserUnsubscribeToPodcastMutation = {
  readonly response: PodcastUserUnsubscribeToPodcastMutationResponse;
  readonly variables: PodcastUserUnsubscribeToPodcastMutationVariables;
};

/*
mutation PodcastUserUnsubscribeToPodcastMutation(
  $input: UserUnsubscribeToPodcastInput!
) {
  UserUnsubscribeToPodcast(input: $input) {
    message
    error
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
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input",
          },
        ],
        concreteType: "UserUnsubscribeToPodcastPayload",
        kind: "LinkedField",
        name: "UserUnsubscribeToPodcast",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "message",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "error",
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
      name: "PodcastUserUnsubscribeToPodcastMutation",
      selections: v1 /*: any*/,
      type: "Mutation",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "PodcastUserUnsubscribeToPodcastMutation",
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: "9fd78bd566e268ded8f9e1434d43e1b8",
      id: null,
      metadata: {},
      name: "PodcastUserUnsubscribeToPodcastMutation",
      operationKind: "mutation",
      text:
        "mutation PodcastUserUnsubscribeToPodcastMutation(\n  $input: UserUnsubscribeToPodcastInput!\n) {\n  UserUnsubscribeToPodcast(input: $input) {\n    message\n    error\n  }\n}\n",
    },
  };
})();
(node as any).hash = "55c115031d35e2c85697f331bf6ac670";
export default node;
