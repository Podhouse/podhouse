/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type EpisodeQueryVariables = {
  _id: string;
};
export type EpisodeQueryResponse = {
  readonly episode: {
    readonly _id: string;
    readonly title: string | null;
    readonly description: string | null;
    readonly publishedDate: string | null;
    readonly link: string | null;
    readonly image: string | null;
    readonly audio: string | null;
    readonly duration: string | null;
    readonly podcast: {
      readonly id: string;
      readonly _id: string;
      readonly name: string | null;
      readonly website: string | null;
      readonly rss: string | null;
      readonly appleId: number | null;
    } | null;
  } | null;
};
export type EpisodeQuery = {
  readonly response: EpisodeQueryResponse;
  readonly variables: EpisodeQueryVariables;
};

/*
query EpisodeQuery(
  $_id: ID!
) {
  episode(_id: $_id) {
    _id
    title
    description
    publishedDate
    link
    image
    audio
    duration
    podcast {
      id
      _id
      name
      website
      rss
      appleId
    }
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
      name: "_id",
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "title",
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
      name: "publishedDate",
      storageKey: null,
    },
    v6 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "link",
      storageKey: null,
    },
    v7 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "image",
      storageKey: null,
    },
    v8 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "audio",
      storageKey: null,
    },
    v9 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "duration",
      storageKey: null,
    },
    v10 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    },
    v11 = {
      alias: null,
      args: null,
      concreteType: "Podcast",
      kind: "LinkedField",
      name: "podcast",
      plural: false,
      selections: [
        v10 /*: any*/,
        v2 /*: any*/,
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
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "appleId",
          storageKey: null,
        },
      ],
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "EpisodeQuery",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: "Episode",
          kind: "LinkedField",
          name: "episode",
          plural: false,
          selections: [
            v2 /*: any*/,
            v3 /*: any*/,
            v4 /*: any*/,
            v5 /*: any*/,
            v6 /*: any*/,
            v7 /*: any*/,
            v8 /*: any*/,
            v9 /*: any*/,
            v11 /*: any*/,
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
      name: "EpisodeQuery",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: "Episode",
          kind: "LinkedField",
          name: "episode",
          plural: false,
          selections: [
            v2 /*: any*/,
            v3 /*: any*/,
            v4 /*: any*/,
            v5 /*: any*/,
            v6 /*: any*/,
            v7 /*: any*/,
            v8 /*: any*/,
            v9 /*: any*/,
            v11 /*: any*/,
            v10 /*: any*/,
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: "d98086ffac01b053dc4b3645bd5d6f4f",
      id: null,
      metadata: {},
      name: "EpisodeQuery",
      operationKind: "query",
      text:
        "query EpisodeQuery(\n  $_id: ID!\n) {\n  episode(_id: $_id) {\n    _id\n    title\n    description\n    publishedDate\n    link\n    image\n    audio\n    duration\n    podcast {\n      id\n      _id\n      name\n      website\n      rss\n      appleId\n    }\n    id\n  }\n}\n",
    },
  };
})();
(node as any).hash = "ae2cf0331ee83b3d36f30a73dc2c910e";
export default node;
