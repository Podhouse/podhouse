/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SettingsQueryVariables = {};
export type SettingsQueryResponse = {
    readonly currentUser: {
        readonly " $fragmentRefs": FragmentRefs<"useAuthUser_user">;
    } | null;
};
export type SettingsQuery = {
    readonly response: SettingsQueryResponse;
    readonly variables: SettingsQueryVariables;
};



/*
query SettingsQuery {
  currentUser {
    ...useAuthUser_user
    id
  }
}

fragment useAuthUser_user on User {
  _id
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
    "name": "id",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SettingsQuery",
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
            "selections": (v0/*: any*/)
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
    "name": "SettingsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9c4fe7f49996198f364dab7b2b8a2f51",
    "id": null,
    "metadata": {},
    "name": "SettingsQuery",
    "operationKind": "query",
    "text": "query SettingsQuery {\n  currentUser {\n    ...useAuthUser_user\n    id\n  }\n}\n\nfragment useAuthUser_user on User {\n  _id\n  id\n}\n"
  }
};
})();
(node as any).hash = '4fb0af286414a5f1199ef788c07718e7';
export default node;
