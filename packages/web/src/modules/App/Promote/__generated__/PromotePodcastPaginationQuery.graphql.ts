/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PromotePodcastPaginationQueryVariables = {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
  podcastName: string;
};
export type PromotePodcastPaginationQueryResponse = {
  readonly " $fragmentRefs": FragmentRefs<"PromotePodcast_podcasts">;
};
export type PromotePodcastPaginationQuery = {
  readonly response: PromotePodcastPaginationQueryResponse;
  readonly variables: PromotePodcastPaginationQueryVariables;
};

/*
query PromotePodcastPaginationQuery(
  $after: String
  $before: String
  $first: Int = 10
  $last: Int
  $podcastName: String!
) {
  ...PromotePodcast_podcasts_1yFHIs
}

fragment PromotePodcast_podcasts_1yFHIs on Query {
  podcastsByName(podcastName: $podcastName, after: $after, first: $first, before: $before, last: $last) {
    edges {
      node {
        id
        _id
        image
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
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "after",
      },
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "before",
      },
      {
        defaultValue: 10,
        kind: "LocalArgument",
        name: "first",
      },
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "last",
      },
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "podcastName",
      },
    ],
    v1 = [
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
      {
        kind: "Variable",
        name: "podcastName",
        variableName: "podcastName",
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "PromotePodcastPaginationQuery",
      selections: [
        {
          args: v1 /*: any*/,
          kind: "FragmentSpread",
          name: "PromotePodcast_podcasts",
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "PromotePodcastPaginationQuery",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: "PodcastConnection",
          kind: "LinkedField",
          name: "podcastsByName",
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
                      name: "id",
                      storageKey: null,
                    },
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
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
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
          args: v1 /*: any*/,
          filters: ["podcastName"],
          handle: "connection",
          key: "PromotePodcast_podcastsByName",
          kind: "LinkedHandle",
          name: "podcastsByName",
        },
      ],
    },
    params: {
      cacheID: "81891323e572523c7e5039f0b172b103",
      id: null,
      metadata: {},
      name: "PromotePodcastPaginationQuery",
      operationKind: "query",
      text:
        "query PromotePodcastPaginationQuery(\n  $after: String\n  $before: String\n  $first: Int = 10\n  $last: Int\n  $podcastName: String!\n) {\n  ...PromotePodcast_podcasts_1yFHIs\n}\n\nfragment PromotePodcast_podcasts_1yFHIs on Query {\n  podcastsByName(podcastName: $podcastName, after: $after, first: $first, before: $before, last: $last) {\n    edges {\n      node {\n        id\n        _id\n        image\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n",
    },
  };
})();
(node as any).hash = "abd9d416db1c9ea09202da59d3d3d586";
export default node;
