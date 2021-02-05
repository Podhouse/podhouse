/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GenrePodcast_podcasts = {
  readonly podcastsByGenre: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly _id: string;
        readonly name: string | null;
        readonly appleId: number | null;
        readonly image: string | null;
      } | null;
    } | null>;
  };
  readonly " $refType": "GenrePodcast_podcasts";
};
export type GenrePodcast_podcasts$data = GenrePodcast_podcasts;
export type GenrePodcast_podcasts$key = {
  readonly " $data"?: GenrePodcast_podcasts$data;
  readonly " $fragmentRefs": FragmentRefs<"GenrePodcast_podcasts">;
};

const node: ReaderFragment = (function () {
  var v0 = ["podcastsByGenre"];
  return {
    argumentDefinitions: [
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
        defaultValue: 25,
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
        name: "primaryGenre",
      },
    ],
    kind: "Fragment",
    metadata: {
      connection: [
        {
          count: null,
          cursor: null,
          direction: "bidirectional",
          path: v0 /*: any*/,
        },
      ],
      refetch: {
        connection: {
          forward: {
            count: "first",
            cursor: "after",
          },
          backward: {
            count: "last",
            cursor: "before",
          },
          path: v0 /*: any*/,
        },
        fragmentPathInResult: [],
        operation: require("./GenrePaginationQuery.graphql.ts"),
      },
    },
    name: "GenrePodcast_podcasts",
    selections: [
      {
        alias: "podcastsByGenre",
        args: [
          {
            kind: "Variable",
            name: "primaryGenre",
            variableName: "primaryGenre",
          },
        ],
        concreteType: "PodcastConnection",
        kind: "LinkedField",
        name: "__GenrePodcast_podcastsByGenre_connection",
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
                    name: "appleId",
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
    ],
    type: "Query",
    abstractKey: null,
  };
})();
(node as any).hash = "eedd28d8e46c5e3d6e4aff0a036c162b";
export default node;
