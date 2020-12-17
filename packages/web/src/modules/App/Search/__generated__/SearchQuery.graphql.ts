/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchQueryVariables = {
  podcastName: string;
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
  $podcastName: String!
) {
  ...SearchPodcast_podcastsByName_h9Yo2
}

fragment SearchPodcast_podcastsByName_h9Yo2 on Query {
  podcastsByName(podcastName: $podcastName, first: 25) {
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
        name: "podcastName",
      },
    ],
    v1 = {
      kind: "Variable",
      name: "podcastName",
      variableName: "podcastName",
    },
    v2 = [
      {
        kind: "Literal",
        name: "first",
        value: 25,
      },
      v1 /*: any*/,
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "SearchQuery",
      selections: [
        {
          args: [v1 /*: any*/],
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
      name: "SearchQuery",
      selections: [
        {
          alias: null,
          args: v2 /*: any*/,
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
          args: v2 /*: any*/,
          filters: ["podcastName"],
          handle: "connection",
          key: "SearchPodcast_podcastsByName",
          kind: "LinkedHandle",
          name: "podcastsByName",
        },
      ],
    },
    params: {
      cacheID: "6b035bc884fb2f3d040da5b71d4b6544",
      id: null,
      metadata: {},
      name: "SearchQuery",
      operationKind: "query",
      text:
        "query SearchQuery(\n  $podcastName: String!\n) {\n  ...SearchPodcast_podcastsByName_h9Yo2\n}\n\nfragment SearchPodcast_podcastsByName_h9Yo2 on Query {\n  podcastsByName(podcastName: $podcastName, first: 25) {\n    edges {\n      node {\n        _id\n        image\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n",
    },
  };
})();
(node as any).hash = "e34b5b74b4337b48c8f6ba0f6e1a2f3c";
export default node;
