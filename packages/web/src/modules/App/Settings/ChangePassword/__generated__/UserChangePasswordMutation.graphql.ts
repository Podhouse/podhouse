/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserChangePasswordInput = {
    oldPassword: string;
    newPassword: string;
    clientMutationId?: string | null;
};
export type UserChangePasswordMutationVariables = {
    input: UserChangePasswordInput;
};
export type UserChangePasswordMutationResponse = {
    readonly UserChangePassword: {
        readonly success: string | null;
        readonly error: string | null;
    } | null;
};
export type UserChangePasswordMutation = {
    readonly response: UserChangePasswordMutationResponse;
    readonly variables: UserChangePasswordMutationVariables;
};



/*
mutation UserChangePasswordMutation(
  $input: UserChangePasswordInput!
) {
  UserChangePassword(input: $input) {
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
    "concreteType": "UserChangePasswordPayload",
    "kind": "LinkedField",
    "name": "UserChangePassword",
    "plural": false,
    "selections": [
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
    "name": "UserChangePasswordMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserChangePasswordMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e1233a6a054627cad5492bb70e173dd4",
    "id": null,
    "metadata": {},
    "name": "UserChangePasswordMutation",
    "operationKind": "mutation",
    "text": "mutation UserChangePasswordMutation(\n  $input: UserChangePasswordInput!\n) {\n  UserChangePassword(input: $input) {\n    success\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ee8a5fcb903db3611d4853f30aadde6c';
export default node;
