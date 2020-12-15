/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchQueryVariables = {
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
  $name: String!
) {
  ...SearchPodcast_podcastsByName_2aiVTE
}

fragment SearchPodcast_podcastsByName_2aiVTE on Query {
  podcastsByName(first: 25, name: $name) {
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
        name: "name",
      },
    ],
    v1 = {
      kind: "Variable",
      name: "name",
      variableName: "name",
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
          filters: ["name"],
          handle: "connection",
          key: "SearchPodcast_podcastsByName",
          kind: "LinkedHandle",
          name: "podcastsByName",
        },
      ],
    },
    params: {
      cacheID: "8e3a2c638ccfa0317f99f0280a3d187f",
      id: null,
      metadata: {},
      name: "SearchQuery",
      operationKind: "query",
      text:
        "query SearchQuery(\n  $name: String!\n) {\n  ...SearchPodcast_podcastsByName_2aiVTE\n}\n\nfragment SearchPodcast_podcastsByName_2aiVTE on Query {\n  podcastsByName(first: 25, name: $name) {\n    edges {\n      node {\n        _id\n        image\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n",
    },
  };
})();
(node as any).hash = "b25d7fccda57088d4e630145bb5f0959";
export default node;
