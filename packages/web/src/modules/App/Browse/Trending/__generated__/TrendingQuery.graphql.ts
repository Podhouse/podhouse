/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TrendingQueryVariables = {
  first: number;
  after?: string | null;
};
export type TrendingQueryResponse = {
  readonly podcasts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly _id: string;
        readonly name: string;
        readonly author: string;
        readonly image: string;
      } | null;
    } | null>;
  };
};
export type TrendingQuery = {
  readonly response: TrendingQueryResponse;
  readonly variables: TrendingQueryVariables;
};

/*
query TrendingQuery(
  $first: Int!
  $after: String
) {
  podcasts(first: $first, after: $after) {
    edges {
      node {
        id
        _id
        name
        author
        image
      }
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
      name: "first",
    },
    v2 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "after",
            variableName: "after",
          },
          {
            kind: "Variable",
            name: "first",
            variableName: "first",
          },
        ],
        concreteType: "PodcastConnection",
        kind: "LinkedField",
        name: "podcasts",
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
                    name: "name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "author",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "image",
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
      },
    ];
  return {
    fragment: {
      argumentDefinitions: [v0 /*: any*/, v1 /*: any*/],
      kind: "Fragment",
      metadata: null,
      name: "TrendingQuery",
      selections: v2 /*: any*/,
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [v1 /*: any*/, v0 /*: any*/],
      kind: "Operation",
      name: "TrendingQuery",
      selections: v2 /*: any*/,
    },
    params: {
      cacheID: "b451bed12f2ff7d040f5cc47ae44f892",
      id: null,
      metadata: {},
      name: "TrendingQuery",
      operationKind: "query",
      text:
        "query TrendingQuery(\n  $first: Int!\n  $after: String\n) {\n  podcasts(first: $first, after: $after) {\n    edges {\n      node {\n        id\n        _id\n        name\n        author\n        image\n      }\n    }\n  }\n}\n",
    },
  };
})();
(node as any).hash = "d238dc431da5287568e78d63b615ec7e";
export default node;