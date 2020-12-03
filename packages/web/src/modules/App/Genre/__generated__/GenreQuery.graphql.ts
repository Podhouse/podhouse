/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GenreQueryVariables = {
  primaryGenre: string;
};
export type GenreQueryResponse = {
  readonly " $fragmentRefs": FragmentRefs<"Genre_podcasts">;
};
export type GenreQuery = {
  readonly response: GenreQueryResponse;
  readonly variables: GenreQueryVariables;
};

/*
query GenreQuery(
  $primaryGenre: String!
) {
  ...Genre_podcasts_BPIEN
}

fragment Genre_podcasts_BPIEN on Query {
  podcastsByGenre(primaryGenre: $primaryGenre, first: 10) {
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
        name: "primaryGenre",
      },
    ],
    v1 = {
      kind: "Variable",
      name: "primaryGenre",
      variableName: "primaryGenre",
    },
    v2 = [
      {
        kind: "Literal",
        name: "first",
        value: 10,
      },
      v1 /*: any*/,
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "GenreQuery",
      selections: [
        {
          args: [v1 /*: any*/],
          kind: "FragmentSpread",
          name: "Genre_podcasts",
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "GenreQuery",
      selections: [
        {
          alias: null,
          args: v2 /*: any*/,
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
          storageKey: null,
        },
        {
          alias: null,
          args: v2 /*: any*/,
          filters: ["primaryGenre"],
          handle: "connection",
          key: "Genre_podcastsByGenre",
          kind: "LinkedHandle",
          name: "podcastsByGenre",
        },
      ],
    },
    params: {
      cacheID: "e96a566c3f3f618bd8851eef56d470d2",
      id: null,
      metadata: {},
      name: "GenreQuery",
      operationKind: "query",
      text:
        "query GenreQuery(\n  $primaryGenre: String!\n) {\n  ...Genre_podcasts_BPIEN\n}\n\nfragment Genre_podcasts_BPIEN on Query {\n  podcastsByGenre(primaryGenre: $primaryGenre, first: 10) {\n    edges {\n      node {\n        _id\n        image\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n",
    },
  };
})();
(node as any).hash = "8c79d38073091f3f39b9de3df191c4c9";
export default node;
