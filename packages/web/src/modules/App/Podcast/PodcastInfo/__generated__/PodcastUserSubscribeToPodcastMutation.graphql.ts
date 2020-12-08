/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserSubscribeToPodcastInput = {
  podcastId: string;
  clientMutationId?: string | null;
};
export type PodcastUserSubscribeToPodcastMutationVariables = {
  input: UserSubscribeToPodcastInput;
};
export type PodcastUserSubscribeToPodcastMutationResponse = {
  readonly UserSubscribeToPodcast: {
    readonly message: string | null;
    readonly error: string | null;
  } | null;
};
export type PodcastUserSubscribeToPodcastMutation = {
  readonly response: PodcastUserSubscribeToPodcastMutationResponse;
  readonly variables: PodcastUserSubscribeToPodcastMutationVariables;
};

/*
mutation PodcastUserSubscribeToPodcastMutation(
  $input: UserSubscribeToPodcastInput!
) {
  UserSubscribeToPodcast(input: $input) {
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
        concreteType: "UserSubscribeToPodcastPayload",
        kind: "LinkedField",
        name: "UserSubscribeToPodcast",
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
      name: "PodcastUserSubscribeToPodcastMutation",
      selections: v1 /*: any*/,
      type: "Mutation",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "PodcastUserSubscribeToPodcastMutation",
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: "084a6f0f3126727fa595ee2fe673b11f",
      id: null,
      metadata: {},
      name: "PodcastUserSubscribeToPodcastMutation",
      operationKind: "mutation",
      text:
        "mutation PodcastUserSubscribeToPodcastMutation(\n  $input: UserSubscribeToPodcastInput!\n) {\n  UserSubscribeToPodcast(input: $input) {\n    message\n    error\n  }\n}\n",
    },
  };
})();
(node as any).hash = "ee4d0ac997308874e7f22a74b84f6138";
export default node;
