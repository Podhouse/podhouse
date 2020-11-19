/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type EpisodeQueryVariables = {
  _id: string;
};
export type EpisodeQueryResponse = {
  readonly episode: {
    readonly id: string;
    readonly _id: string;
    readonly title: string;
    readonly description: string;
    readonly publishedDate: string;
    readonly link: string;
    readonly image: string;
    readonly audio: string;
    readonly duration: string;
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
    id
    _id
    title
    description
    publishedDate
    link
    image
    audio
    duration
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
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "_id",
            variableName: "_id",
          },
        ],
        concreteType: "Episode",
        kind: "LinkedField",
        name: "episode",
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
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "EpisodeQuery",
      selections: v1 /*: any*/,
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "EpisodeQuery",
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: "58ff7f0b09851274775fa3a5501fe901",
      id: null,
      metadata: {},
      name: "EpisodeQuery",
      operationKind: "query",
      text:
        "query EpisodeQuery(\n  $_id: ID!\n) {\n  episode(_id: $_id) {\n    id\n    _id\n    title\n    description\n    publishedDate\n    link\n    image\n    audio\n    duration\n  }\n}\n",
    },
  };
})();
(node as any).hash = "fd9a72614166307b6c20fe48e9d737fa";
export default node;
