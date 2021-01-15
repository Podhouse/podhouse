/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SubscriptionsQueryVariables = {};
export type SubscriptionsQueryResponse = {
    readonly currentUser: {
        readonly " $fragmentRefs": FragmentRefs<"useAuthUser_user" | "SubscriptionsPodcast_subscriptions">;
    } | null;
};
export type SubscriptionsQuery = {
    readonly response: SubscriptionsQueryResponse;
    readonly variables: SubscriptionsQueryVariables;
};



/*
query SubscriptionsQuery {
  currentUser {
    ...useAuthUser_user
    ...SubscriptionsPodcast_subscriptions
    id
  }
}

fragment SubscriptionsPodcast_subscriptions on User {
  subscriptions(first: 25) {
    edges {
      node {
        _id
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
  id
}

fragment useAuthUser_user on User {
  _id
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 25
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SubscriptionsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          {
            "kind": "InlineDataFragmentSpread",
            "name": "useAuthUser_user",
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/)
            ]
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SubscriptionsPodcast_subscriptions"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SubscriptionsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "PodcastConnection",
            "kind": "LinkedField",
            "name": "subscriptions",
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
                      (v0/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "image",
                        "storageKey": null
                      },
                      (v1/*: any*/),
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
            "storageKey": "subscriptions(first:25)"
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "SubscriptionsPodcast_subscriptions",
            "kind": "LinkedHandle",
            "name": "subscriptions"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4f5ab29f6ba8243301128a504d0dc17a",
    "id": null,
    "metadata": {},
    "name": "SubscriptionsQuery",
    "operationKind": "query",
    "text": "query SubscriptionsQuery {\n  currentUser {\n    ...useAuthUser_user\n    ...SubscriptionsPodcast_subscriptions\n    id\n  }\n}\n\nfragment SubscriptionsPodcast_subscriptions on User {\n  subscriptions(first: 25) {\n    edges {\n      node {\n        _id\n        image\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment useAuthUser_user on User {\n  _id\n  id\n}\n"
  }
};
})();
(node as any).hash = '2257ad97bd220b7515edb892cf704f12';
export default node;
