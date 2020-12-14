/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchPodcast_podcastsByName = {
  readonly podcastsByName: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly _id: string;
        readonly image: string;
      } | null;
    } | null>;
  };
  readonly " $refType": "SearchPodcast_podcastsByName";
};
export type SearchPodcast_podcastsByName$data = SearchPodcast_podcastsByName;
export type SearchPodcast_podcastsByName$key = {
  readonly " $data"?: SearchPodcast_podcastsByName$data;
  readonly " $fragmentRefs": FragmentRefs<"SearchPodcast_podcastsByName">;
};

const node: ReaderFragment = (function () {
  var v0 = ["podcastsByName"];
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
        operation: require("./SearchPodcastPaginationQuery.graphql.ts"),
      },
    },
    name: "SearchPodcast_podcastsByName",
    selections: [
      {
        alias: "podcastsByName",
        args: [
          {
            kind: "Variable",
            name: "name",
            variableName: "name",
          },
        ],
        concreteType: "PodcastConnection",
        kind: "LinkedField",
        name: "__SearchPodcast_podcastsByName_connection",
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
(node as any).hash = "9528cf13fcc0afd85d8455e1d5181a28";
export default node;
