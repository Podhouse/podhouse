/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PodcastQueryVariables = {
    _id: string;
    after?: string | null;
    first: number;
    before?: string | null;
    last: number;
};
export type PodcastQueryResponse = {
    readonly podcast: {
        readonly id: string;
        readonly _id: string;
        readonly appleId: number;
        readonly name: string;
        readonly author: string;
        readonly description: string;
        readonly website: string;
        readonly rss: string;
        readonly image: string;
        readonly episodes: {
            readonly pageInfo: {
                readonly hasNextPage: boolean;
                readonly hasPreviousPage: boolean;
                readonly startCursor: string | null;
                readonly endCursor: string | null;
            };
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
                } | null;
                readonly cursor: string;
            } | null>;
        };
        readonly genres: ReadonlyArray<string | null> | null;
        readonly genreIds: ReadonlyArray<string | null> | null;
    } | null;
};
export type PodcastQuery = {
    readonly response: PodcastQueryResponse;
    readonly variables: PodcastQueryVariables;
};



/*
query PodcastQuery(
  $_id: ID!
  $after: String
  $first: Int!
  $before: String
  $last: Int!
) {
  podcast(_id: $_id) {
    id
    _id
    appleId
    name
    author
    description
    website
    rss
    image
    episodes(after: $after, first: $first, before: $before, last: $last) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
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
        cursor
      }
    }
    genres
    genreIds
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "_id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "before"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "last"
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image",
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      }
    ],
    "concreteType": "Podcast",
    "kind": "LinkedField",
    "name": "podcast",
    "plural": false,
    "selections": [
      (v5/*: any*/),
      (v6/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "appleId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "author",
        "storageKey": null
      },
      (v7/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "website",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "rss",
        "storageKey": null
      },
      (v8/*: any*/),
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "after"
          },
          {
            "kind": "Variable",
            "name": "before",
            "variableName": "before"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first"
          },
          {
            "kind": "Variable",
            "name": "last",
            "variableName": "last"
          }
        ],
        "concreteType": "EpisodeConnection",
        "kind": "LinkedField",
        "name": "episodes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfoExtended",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "EpisodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Episode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "publishedDate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "link",
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "audio",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "duration",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "genres",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "genreIds",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PodcastQuery",
    "selections": (v9/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "PodcastQuery",
    "selections": (v9/*: any*/)
  },
  "params": {
    "cacheID": "1d6904c3a0700b9ed07c0b14c5052e48",
    "id": null,
    "metadata": {},
    "name": "PodcastQuery",
    "operationKind": "query",
    "text": "query PodcastQuery(\n  $_id: ID!\n  $after: String\n  $first: Int!\n  $before: String\n  $last: Int!\n) {\n  podcast(_id: $_id) {\n    id\n    _id\n    appleId\n    name\n    author\n    description\n    website\n    rss\n    image\n    episodes(after: $after, first: $first, before: $before, last: $last) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      edges {\n        node {\n          id\n          _id\n          title\n          description\n          publishedDate\n          link\n          image\n          audio\n          duration\n        }\n        cursor\n      }\n    }\n    genres\n    genreIds\n  }\n}\n"
  }
};
})();
(node as any).hash = '6e28c2a791bcf518997f206966bf43dc';
export default node;
