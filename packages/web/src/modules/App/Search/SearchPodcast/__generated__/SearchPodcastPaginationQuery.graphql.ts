/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchPodcastPaginationQueryVariables = {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
  name?: string | null;
};
export type SearchPodcastPaginationQueryResponse = {
  readonly " $fragmentRefs": FragmentRefs<"SearchPodcast_podcastsByName">;
};
export type SearchPodcastPaginationQuery = {
  readonly response: SearchPodcastPaginationQueryResponse;
  readonly variables: SearchPodcastPaginationQueryVariables;
};

/*
query SearchPodcastPaginationQuery(
  $after: String
  $before: String
  $first: Int = 10
  $last: Int
  $name: String
) {
  ...SearchPodcast_podcastsByName_3GnGUH
}

fragment SearchPodcast_podcastsByName_3GnGUH on Query {
  podcastsByName(name: $name, after: $after, first: $first, before: $before, last: $last) {
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
        name: "name",
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
        name: "name",
        variableName: "name",
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "SearchPodcastPaginationQuery",
      selections: [
        {
          args: v1 /*: any*/,
          kind: "FragmentSpread",
          name: "SearchPodcast_podcastsByName",
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "SearchPodcastPaginationQuery",
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
                      name: "id",
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
          filters: ["name"],
          handle: "connection",
          key: "SearchPodcast_podcastsByName",
          kind: "LinkedHandle",
          name: "podcastsByName",
        },
      ],
    },
    params: {
      cacheID: "f78513b86f735e0ddfe755577276dff0",
      id: null,
      metadata: {},
      name: "SearchPodcastPaginationQuery",
      operationKind: "query",
      text:
        "query SearchPodcastPaginationQuery(\n  $after: String\n  $before: String\n  $first: Int = 10\n  $last: Int\n  $name: String\n) {\n  ...SearchPodcast_podcastsByName_3GnGUH\n}\n\nfragment SearchPodcast_podcastsByName_3GnGUH on Query {\n  podcastsByName(name: $name, after: $after, first: $first, before: $before, last: $last) {\n    edges {\n      node {\n        _id\n        image\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n",
    },
  };
})();
(node as any).hash = "5f32156c1466e3f685306ff80d80ced5";
export default node;
