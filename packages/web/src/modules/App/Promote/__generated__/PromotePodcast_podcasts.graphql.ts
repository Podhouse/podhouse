/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PromotePodcast_podcasts = {
  readonly podcastsByName: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly _id: string;
        readonly name: string;
        readonly image: string;
      } | null;
    } | null>;
  };
  readonly " $refType": "PromotePodcast_podcasts";
};
export type PromotePodcast_podcasts$data = PromotePodcast_podcasts;
export type PromotePodcast_podcasts$key = {
  readonly " $data"?: PromotePodcast_podcasts$data;
  readonly " $fragmentRefs": FragmentRefs<"PromotePodcast_podcasts">;
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
        name: "podcastName",
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
        operation: require("./PromotePodcastPaginationQuery.graphql.ts"),
      },
    },
    name: "PromotePodcast_podcasts",
    selections: [
      {
        alias: "podcastsByName",
        args: [
          {
            kind: "Variable",
            name: "podcastName",
            variableName: "podcastName",
          },
        ],
        concreteType: "PodcastConnection",
        kind: "LinkedField",
        name: "__PromotePodcast_podcastsByName_connection",
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
(node as any).hash = "45678163eef17a45d88e2289795e3c17";
export default node;
