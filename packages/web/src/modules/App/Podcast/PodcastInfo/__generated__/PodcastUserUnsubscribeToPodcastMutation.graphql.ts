/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserUnsubscribeToPodcastInput = {
  _id: string;
  clientMutationId?: string | null;
};
export type PodcastUserUnsubscribeToPodcastMutationVariables = {
  input: UserUnsubscribeToPodcastInput;
};
export type PodcastUserUnsubscribeToPodcastMutationResponse = {
  readonly UserUnsubscribeToPodcast: {
    readonly user: {
      readonly node: {
        readonly subscriptions: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly id: string;
              readonly name: string;
            } | null;
          } | null>;
        };
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
) {
  UserUnsubscribeToPodcast(input: $input) {
    user {
      node {
        subscriptions {
          edges {
            node {
              id
              name
            }
          }
        }
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
      name: "id",
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      concreteType: "PodcastConnection",
      kind: "LinkedField",
      name: "subscriptions",
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "PodcastEdge",
          kind: "LinkedField",
          name: "edges",
          plural: true,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Podcast",
              kind: "LinkedField",
              name: "node",
              plural: false,
              selections: [
                v2 /*: any*/,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
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
                  selections: [v3 /*: any*/, v2 /*: any*/],
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
      cacheID: "e7d5ee816a44607731056ee83f7c2529",
      id: null,
      metadata: {},
      name: "PodcastUserUnsubscribeToPodcastMutation",
      operationKind: "mutation",
      text:
        "mutation PodcastUserUnsubscribeToPodcastMutation(\n  $input: UserUnsubscribeToPodcastInput!\n) {\n  UserUnsubscribeToPodcast(input: $input) {\n    user {\n      node {\n        subscriptions {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n",
    },
  };
})();
(node as any).hash = "d4a7190326acf4ee5899c8158f58ea40";
export default node;
