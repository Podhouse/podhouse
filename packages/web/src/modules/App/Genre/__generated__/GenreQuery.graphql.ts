/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GenreQueryVariables = {
    primaryGenre: string;
};
export type GenreQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"GenrePodcast_podcasts">;
};
export type GenreQuery = {
    readonly response: GenreQueryResponse;
    readonly variables: GenreQueryVariables;
};



/*
query GenreQuery(
  $primaryGenre: String!
) {
  ...GenrePodcast_podcasts_BPIEN
}

fragment GenrePodcast_podcasts_BPIEN on Query {
  podcastsByGenre(primaryGenre: $primaryGenre, first: 15) {
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
    "name": "primaryGenre"
  }
],
v1 = {
  "kind": "Variable",
  "name": "primaryGenre",
  "variableName": "primaryGenre"
},
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 15
  },
  (v1/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GenreQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/)
        ],
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
    "name": "GenreQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
        "args": (v2/*: any*/),
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
    "cacheID": "89c5d5eea2d83cd37125246154c8bd4d",
    "id": null,
    "metadata": {},
    "name": "GenreQuery",
    "operationKind": "query",
    "text": "query GenreQuery(\n  $primaryGenre: String!\n) {\n  ...GenrePodcast_podcasts_BPIEN\n}\n\nfragment GenrePodcast_podcasts_BPIEN on Query {\n  podcastsByGenre(primaryGenre: $primaryGenre, first: 15) {\n    edges {\n      node {\n        _id\n        name\n        appleId\n        image\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '446c4831d791f758d834facd84682572';
export default node;
