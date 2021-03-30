/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GenrePaginationQueryVariables = {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
    primaryGenre?: string | null;
};
export type GenrePaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"GenrePodcast_podcasts">;
};
export type GenrePaginationQuery = {
    readonly response: GenrePaginationQueryResponse;
    readonly variables: GenrePaginationQueryVariables;
};



/*
query GenrePaginationQuery(
  $after: String
  $before: String
  $first: Int = 50
  $last: Int
  $primaryGenre: String
) {
  ...GenrePodcast_podcasts_2w6tXt
}

fragment GenrePodcast_podcasts_2w6tXt on Query {
  podcastsByGenre(primaryGenre: $primaryGenre, after: $after, first: $first, before: $before, last: $last) {
    edges {
      node {
        _id
        name
        appleId
        image
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
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "before"
  },
  {
    "defaultValue": 50,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "last"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "primaryGenre"
  }
],
v1 = [
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
  },
  {
    "kind": "Variable",
    "name": "primaryGenre",
    "variableName": "primaryGenre"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GenrePaginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "GenrePodcast_podcasts"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GenrePaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PodcastConnection",
        "kind": "LinkedField",
        "name": "podcastsByGenre",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PodcastEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Podcast",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "_id",
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
                    "name": "appleId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "image",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
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
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [
          "primaryGenre"
        ],
        "handle": "connection",
        "key": "GenrePodcast_podcastsByGenre",
        "kind": "LinkedHandle",
        "name": "podcastsByGenre"
      }
    ]
  },
  "params": {
    "cacheID": "5c153b3691844f78b9724c8ce383f5d3",
    "id": null,
    "metadata": {},
    "name": "GenrePaginationQuery",
    "operationKind": "query",
    "text": "query GenrePaginationQuery(\n  $after: String\n  $before: String\n  $first: Int = 50\n  $last: Int\n  $primaryGenre: String\n) {\n  ...GenrePodcast_podcasts_2w6tXt\n}\n\nfragment GenrePodcast_podcasts_2w6tXt on Query {\n  podcastsByGenre(primaryGenre: $primaryGenre, after: $after, first: $first, before: $before, last: $last) {\n    edges {\n      node {\n        _id\n        name\n        appleId\n        image\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a55c49cfd650960311fd8c23df886227';
export default node;
