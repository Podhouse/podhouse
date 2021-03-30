/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserSubscribedInput = {
    _id?: string | null;
};
export type PodcastInfoUserQueryVariables = {
    input: UserSubscribedInput;
};
export type PodcastInfoUserQueryResponse = {
    readonly currentUser: {
        readonly _id: string;
        readonly subscribed: boolean | null;
    } | null;
};
export type PodcastInfoUserQuery = {
    readonly response: PodcastInfoUserQueryResponse;
    readonly variables: PodcastInfoUserQueryVariables;
};



/*
query PodcastInfoUserQuery(
  $input: UserSubscribedInput!
) {
  currentUser {
    _id
    subscribed(input: $input)
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }
  ],
  "kind": "ScalarField",
  "name": "subscribed",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PodcastInfoUserQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
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
    "name": "PodcastInfoUserQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1856ed946e511dd36c5937adf3c8ced7",
    "id": null,
    "metadata": {},
    "name": "PodcastInfoUserQuery",
    "operationKind": "query",
    "text": "query PodcastInfoUserQuery(\n  $input: UserSubscribedInput!\n) {\n  currentUser {\n    _id\n    subscribed(input: $input)\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '90b69a5eed3872deb087684d0958f497';
export default node;
