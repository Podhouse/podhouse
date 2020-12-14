/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchQueryVariables = {
  first?: number | null;
  last?: number | null;
  before?: string | null;
  after?: string | null;
  name: string;
};
export type SearchQueryResponse = {
  readonly " $fragmentRefs": FragmentRefs<"SearchPodcast_podcastsByName">;
};
export type SearchQuery = {
  readonly response: SearchQueryResponse;
  readonly variables: SearchQueryVariables;
};

/*
query SearchQuery(
  $first: Int
  $last: Int
  $before: String
  $after: String
  $name: String!
) {
  ...SearchPodcast_podcastsByName_3GnGUH
}

fragment SearchPodcast_podcastsByName_3GnGUH on Query {
  podcastsByName(first: $first, last: $last, before: $before, after: $after, name: $name) {
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
      defaultValue: null,
      kind: "LocalArgument",
      name: "first",
    },
    v3 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "last",
    },
    v4 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "name",
    },
    v5 = [
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
      argumentDefinitions: [
        v0 /*: any*/,
        v1 /*: any*/,
        v2 /*: any*/,
        v3 /*: any*/,
        v4 /*: any*/,
      ],
      kind: "Fragment",
      metadata: null,
      name: "SearchQuery",
      selections: [
        {
          args: v5 /*: any*/,
          kind: "FragmentSpread",
          name: "SearchPodcast_podcastsByName",
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [
        v2 /*: any*/,
        v3 /*: any*/,
        v1 /*: any*/,
        v0 /*: any*/,
        v4 /*: any*/,
      ],
      kind: "Operation",
      name: "SearchQuery",
      selections: [
        {
          alias: null,
          args: v5 /*: any*/,
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
          args: v5 /*: any*/,
          filters: ["name"],
          handle: "connection",
          key: "SearchPodcast_podcastsByName",
          kind: "LinkedHandle",
          name: "podcastsByName",
        },
      ],
    },
    params: {
      cacheID: "68da3fc6d8b86e8465b483c0d8611136",
      id: null,
      metadata: {},
      name: "SearchQuery",
      operationKind: "query",
      text:
        "query SearchQuery(\n  $first: Int\n  $last: Int\n  $before: String\n  $after: String\n  $name: String!\n) {\n  ...SearchPodcast_podcastsByName_3GnGUH\n}\n\nfragment SearchPodcast_podcastsByName_3GnGUH on Query {\n  podcastsByName(first: $first, last: $last, before: $before, after: $after, name: $name) {\n    edges {\n      node {\n        _id\n        image\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n",
    },
  };
})();
(node as any).hash = "048a31d266ff774f59cc779ed137d61d";
export default node;
