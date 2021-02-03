/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PodcastQueryVariables = {
    _id: string;
};
export type PodcastQueryResponse = {
    readonly podcast: {
        readonly id: string;
        readonly _id: string;
        readonly name: string;
        readonly appleId: number;
        readonly author: string;
        readonly description: string;
        readonly website: string;
        readonly rss: string;
        readonly image: string;
        readonly " $fragmentRefs": FragmentRefs<"PodcastEpisodes_episodes">;
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
    id
    _id
    name
    appleId
    author
    description
    website
    rss
    image
    ...PodcastEpisodes_episodes
  }
}

fragment PodcastEpisodes_episodes on Podcast {
  episodes(first: 10) {
    edges {
      node {
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
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "_id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "_id",
    "variableName": "_id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "appleId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "author",
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
  "name": "website",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rss",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image",
  "storageKey": null
},
v11 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PodcastQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Podcast",
        "kind": "LinkedField",
        "name": "podcast",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PodcastEpisodes_episodes"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PodcastQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Podcast",
        "kind": "LinkedField",
        "name": "podcast",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          {
            "alias": null,
            "args": (v11/*: any*/),
            "concreteType": "EpisodeConnection",
            "kind": "LinkedField",
            "name": "episodes",
            "plural": false,
            "selections": [
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
                      (v3/*: any*/),
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
                      (v10/*: any*/),
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Podcast",
                        "kind": "LinkedField",
                        "name": "podcast",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v8/*: any*/),
                          (v9/*: any*/),
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
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
              },
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
                    "name": "endCursor",
                    "storageKey": null
                  },
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
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "episodes(first:10)"
          },
          {
            "alias": null,
            "args": (v11/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "PodcastEpisodes_episodes",
            "kind": "LinkedHandle",
            "name": "episodes"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "28a438633016a6ab36c9b6768c6b997b",
    "id": null,
    "metadata": {},
    "name": "PodcastQuery",
    "operationKind": "query",
    "text": "query PodcastQuery(\n  $_id: ID!\n) {\n  podcast(_id: $_id) {\n    id\n    _id\n    name\n    appleId\n    author\n    description\n    website\n    rss\n    image\n    ...PodcastEpisodes_episodes\n  }\n}\n\nfragment PodcastEpisodes_episodes on Podcast {\n  episodes(first: 10) {\n    edges {\n      node {\n        _id\n        title\n        description\n        publishedDate\n        link\n        image\n        audio\n        duration\n        podcast {\n          id\n          _id\n          name\n          website\n          rss\n          appleId\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = 'e75178f75f87f10ffb8e1bc9fccd6a7e';
export default node;
