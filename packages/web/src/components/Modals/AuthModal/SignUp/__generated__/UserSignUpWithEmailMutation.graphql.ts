/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserSignUpWithEmailInput = {
    email: string;
    password: string;
    clientMutationId?: string | null;
};
export type UserSignUpWithEmailMutationVariables = {
    input: UserSignUpWithEmailInput;
};
export type UserSignUpWithEmailMutationResponse = {
    readonly UserSignUpWithEmail: {
        readonly token: string | null;
        readonly success: string | null;
        readonly error: string | null;
    } | null;
};
export type UserSignUpWithEmailMutation = {
    readonly response: UserSignUpWithEmailMutationResponse;
    readonly variables: UserSignUpWithEmailMutationVariables;
};



/*
mutation UserSignUpWithEmailMutation(
  $input: UserSignUpWithEmailInput!
) {
  UserSignUpWithEmail(input: $input) {
    token
    success
    error
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
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserSignUpWithEmailPayload",
    "kind": "LinkedField",
    "name": "UserSignUpWithEmail",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserSignUpWithEmailMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserSignUpWithEmailMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e2dcc9fef60cfab62e7da652acaf5fc6",
    "id": null,
    "metadata": {},
    "name": "UserSignUpWithEmailMutation",
    "operationKind": "mutation",
    "text": "mutation UserSignUpWithEmailMutation(\n  $input: UserSignUpWithEmailInput!\n) {\n  UserSignUpWithEmail(input: $input) {\n    token\n    success\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = '4fa5f8e6603feb5c68547a28a02608da';
export default node;
