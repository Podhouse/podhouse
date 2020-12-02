/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GenreQueryVariables = {};
export type GenreQueryResponse = {
  readonly " $fragmentRefs": FragmentRefs<"Genre_podcasts">;
};
export type GenreQuery = {
  readonly response: GenreQueryResponse;
  readonly variables: GenreQueryVariables;
};

/*
query GenreQuery {
  ...Genre_podcasts
}

fragment Genre_podcasts on Query {
  podcastsByGenre(first: 10) {
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
      kind: "Literal",
      name: "first",
      value: 10,
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GenreQuery",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "Genre_podcasts",
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "GenreQuery",
      selections: [
        {
          alias: null,
          args: v0 /*: any*/,
          concreteType: "PodcastConnection",
          kind: "LinkedField",
          name: "podcastsByGenre",
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
          storageKey: "podcastsByGenre(first:10)",
        },
        {
          alias: null,
          args: v0 /*: any*/,
          filters: ["primaryGenre"],
          handle: "connection",
          key: "Genre_podcastsByGenre",
          kind: "LinkedHandle",
          name: "podcastsByGenre",
        },
      ],
    },
    params: {
      cacheID: "27b02d6296fc6863886e9468802b3c11",
      id: null,
      metadata: {},
      name: "GenreQuery",
      operationKind: "query",
      text:
        "query GenreQuery {\n  ...Genre_podcasts\n}\n\nfragment Genre_podcasts on Query {\n  podcastsByGenre(first: 10) {\n    edges {\n      node {\n        _id\n        image\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n",
    },
  };
})();
(node as any).hash = "2822447ad0d6631a093aa9dce59fe36e";
export default node;
