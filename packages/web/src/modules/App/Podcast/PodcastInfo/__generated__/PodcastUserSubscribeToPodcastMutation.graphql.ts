/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserSubscribeToPodcastInput = {
  _id: string;
  clientMutationId?: string | null;
};
export type PodcastUserSubscribeToPodcastMutationVariables = {
  input: UserSubscribeToPodcastInput;
};
export type PodcastUserSubscribeToPodcastMutationResponse = {
  readonly UserSubscribeToPodcast: {
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
export type PodcastUserSubscribeToPodcastMutation = {
  readonly response: PodcastUserSubscribeToPodcastMutationResponse;
  readonly variables: PodcastUserSubscribeToPodcastMutationVariables;
};

/*
mutation PodcastUserSubscribeToPodcastMutation(
  $input: UserSubscribeToPodcastInput!
) {
  UserSubscribeToPodcast(input: $input) {
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
      cacheID: "db50d1cbd689045446c3dd35d496f458",
      id: null,
      metadata: {},
      name: "PodcastUserSubscribeToPodcastMutation",
      operationKind: "mutation",
      text:
        "mutation PodcastUserSubscribeToPodcastMutation(\n  $input: UserSubscribeToPodcastInput!\n) {\n  UserSubscribeToPodcast(input: $input) {\n    user {\n      node {\n        subscriptions {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n",
    },
  };
})();
(node as any).hash = "d9e1717b8197e9ae3e41721dc7dfdc7e";
export default node;
