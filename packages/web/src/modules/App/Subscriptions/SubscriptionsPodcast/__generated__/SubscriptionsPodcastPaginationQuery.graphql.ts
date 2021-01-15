/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SubscriptionsPodcastPaginationQueryVariables = {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
  id: string;
};
export type SubscriptionsPodcastPaginationQueryResponse = {
  readonly node: {
    readonly " $fragmentRefs": FragmentRefs<"SubscriptionsPodcast_subscriptions">;
  } | null;
};
export type SubscriptionsPodcastPaginationQuery = {
  readonly response: SubscriptionsPodcastPaginationQueryResponse;
  readonly variables: SubscriptionsPodcastPaginationQueryVariables;
};

/*
query SubscriptionsPodcastPaginationQuery(
  $after: String
  $before: String
  $first: Int = 25
  $last: Int
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...SubscriptionsPodcast_subscriptions_pbnwq
    id
  }
}

fragment SubscriptionsPodcast_subscriptions_pbnwq on User {
  subscriptions(after: $after, first: $first, before: $before, last: $last) {
    edges {
      node {
        _id
        image
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
  id
}
*/

const node: ConcreteRequest = (function () {
  var v0 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "after",
    },
    v1 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "before",
    },
    v2 = {
      defaultValue: 25,
      kind: "LocalArgument",
      name: "first",
    },
    v3 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "id",
    },
    v4 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "last",
    },
    v5 = [
      {
        kind: "Variable",
        name: "id",
        variableName: "id",
      },
    ],
    v6 = [
      {
        kind: "Variable",
        name: "after",
        variableName: "after",
      },
      {
        kind: "Variable",
        name: "before",
        variableName: "before",
      },
      {
        kind: "Variable",
        name: "first",
        variableName: "first",
      },
      {
        kind: "Variable",
        name: "last",
        variableName: "last",
      },
    ],
    v7 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "__typename",
      storageKey: null,
    },
    v8 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: [
        v0 /*: any*/,
        v1 /*: any*/,
        v2 /*: any*/,
        v3 /*: any*/,
        v4 /*: any*/,
      ],
      kind: "Fragment",
      metadata: null,
      name: "SubscriptionsPodcastPaginationQuery",
      selections: [
        {
          alias: null,
          args: v5 /*: any*/,
          concreteType: null,
          kind: "LinkedField",
          name: "node",
          plural: false,
          selections: [
            {
              args: v6 /*: any*/,
              kind: "FragmentSpread",
              name: "SubscriptionsPodcast_subscriptions",
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
      argumentDefinitions: [
        v0 /*: any*/,
        v1 /*: any*/,
        v2 /*: any*/,
        v4 /*: any*/,
        v3 /*: any*/,
      ],
      kind: "Operation",
      name: "SubscriptionsPodcastPaginationQuery",
      selections: [
        {
          alias: null,
          args: v5 /*: any*/,
          concreteType: null,
          kind: "LinkedField",
          name: "node",
          plural: false,
          selections: [
            v7 /*: any*/,
            v8 /*: any*/,
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: v6 /*: any*/,
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
                              name: "image",
                              storageKey: null,
                            },
                            v8 /*: any*/,
                            v7 /*: any*/,
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "cursor",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PageInfoExtended",
                      kind: "LinkedField",
                      name: "pageInfo",
                      plural: false,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "endCursor",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "hasNextPage",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "hasPreviousPage",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "startCursor",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: v6 /*: any*/,
                  filters: null,
                  handle: "connection",
                  key: "SubscriptionsPodcast_subscriptions",
                  kind: "LinkedHandle",
                  name: "subscriptions",
                },
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: "6de2fc4f6463a62363b935ee14f3f1bb",
      id: null,
      metadata: {},
      name: "SubscriptionsPodcastPaginationQuery",
      operationKind: "query",
      text:
        "query SubscriptionsPodcastPaginationQuery(\n  $after: String\n  $before: String\n  $first: Int = 25\n  $last: Int\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...SubscriptionsPodcast_subscriptions_pbnwq\n    id\n  }\n}\n\nfragment SubscriptionsPodcast_subscriptions_pbnwq on User {\n  subscriptions(after: $after, first: $first, before: $before, last: $last) {\n    edges {\n      node {\n        _id\n        image\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n",
    },
  };
})();
(node as any).hash = "aa5396ea126ef440eb181a0ad811ec89";
export default node;
