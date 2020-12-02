/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PodcastQueryVariables = {
  _id: string;
};
export type PodcastQueryResponse = {
  readonly podcast: {
    readonly name: string;
    readonly author: string;
    readonly description: string;
    readonly website: string;
    readonly rss: string;
    readonly image: string;
  } | null;
};
export type PodcastQuery = {
  readonly response: PodcastQueryResponse;
  readonly variables: PodcastQueryVariables;
};

/*
query PodcastQuery(
  $_id: ID!
) {
  podcast(_id: $_id) {
    name
    author
    description
    website
    rss
    image
    id
  }
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "_id",
      },
    ],
    v1 = [
      {
        kind: "Variable",
        name: "_id",
        variableName: "_id",
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "name",
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "author",
      storageKey: null,
    },
    v4 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "description",
      storageKey: null,
    },
    v5 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "website",
      storageKey: null,
    },
    v6 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "rss",
      storageKey: null,
    },
    v7 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "image",
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "PodcastQuery",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: "Podcast",
          kind: "LinkedField",
          name: "podcast",
          plural: false,
          selections: [
            v2 /*: any*/,
            v3 /*: any*/,
            v4 /*: any*/,
            v5 /*: any*/,
            v6 /*: any*/,
            v7 /*: any*/,
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "PodcastQuery",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: "Podcast",
          kind: "LinkedField",
          name: "podcast",
          plural: false,
          selections: [
            v2 /*: any*/,
            v3 /*: any*/,
            v4 /*: any*/,
            v5 /*: any*/,
            v6 /*: any*/,
            v7 /*: any*/,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: "77772dde24afbe28d3d98af0d9e01ad5",
      id: null,
      metadata: {},
      name: "PodcastQuery",
      operationKind: "query",
      text:
        "query PodcastQuery(\n  $_id: ID!\n) {\n  podcast(_id: $_id) {\n    name\n    author\n    description\n    website\n    rss\n    image\n    id\n  }\n}\n",
    },
  };
})();
(node as any).hash = "d6522e94f2e7121eaac4f1f6c06f5658";
export default node;
