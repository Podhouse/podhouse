/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PodcastEpisodes_episodes = {
  readonly episodes: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly _id: string;
        readonly title: string;
        readonly description: string;
        readonly publishedDate: string;
        readonly link: string;
        readonly image: string;
        readonly audio: string;
        readonly duration: string;
        readonly podcast: {
          readonly name: string;
          readonly website: string;
          readonly rss: string;
        };
      } | null;
    } | null>;
  };
  readonly id: string;
  readonly " $refType": "PodcastEpisodes_episodes";
};
export type PodcastEpisodes_episodes$data = PodcastEpisodes_episodes;
export type PodcastEpisodes_episodes$key = {
  readonly " $data"?: PodcastEpisodes_episodes$data;
  readonly " $fragmentRefs": FragmentRefs<"PodcastEpisodes_episodes">;
};

const node: ReaderFragment = (function () {
  var v0 = ["episodes"],
    v1 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    };
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
        fragmentPathInResult: ["node"],
        operation: require("./PodcastEpisodesPaginationQuery.graphql.ts"),
        identifierField: "id",
      },
    },
    name: "PodcastEpisodes_episodes",
    selections: [
      {
        alias: "episodes",
        args: null,
        concreteType: "EpisodeConnection",
        kind: "LinkedField",
        name: "__PodcastEpisodes_episodes_connection",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "EpisodeEdge",
            kind: "LinkedField",
            name: "edges",
            plural: true,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Episode",
                kind: "LinkedField",
                name: "node",
                plural: false,
                selections: [
                  v1 /*: any*/,
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
                    name: "title",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "description",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "publishedDate",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "link",
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
                    name: "audio",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "duration",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "Podcast",
                    kind: "LinkedField",
                    name: "podcast",
                    plural: false,
                    selections: [
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
                        name: "website",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "rss",
                        storageKey: null,
                      },
                    ],
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
      v1 /*: any*/,
    ],
    type: "Podcast",
    abstractKey: null,
  };
})();
(node as any).hash = "10a0ff64fd395a5cac698c1745894028";
export default node;
