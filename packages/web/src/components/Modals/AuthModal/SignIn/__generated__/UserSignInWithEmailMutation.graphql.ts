/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserSignInWithEmailInput = {
  email: string;
  password: string;
  clientMutationId?: string | null;
};
export type UserSignInWithEmailMutationVariables = {
  input: UserSignInWithEmailInput;
};
export type UserSignInWithEmailMutationResponse = {
  readonly UserSignInWithEmail: {
    readonly token: string | null;
    readonly success: string | null;
    readonly error: string | null;
  } | null;
};
export type UserSignInWithEmailMutation = {
  readonly response: UserSignInWithEmailMutationResponse;
  readonly variables: UserSignInWithEmailMutationVariables;
};

/*
mutation UserSignInWithEmailMutation(
  $input: UserSignInWithEmailInput!
) {
  UserSignInWithEmail(input: $input) {
    token
    success
    error
  }
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "input",
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input",
          },
        ],
        concreteType: "UserSignInWithEmailPayload",
        kind: "LinkedField",
        name: "UserSignInWithEmail",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "token",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "success",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "error",
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
      name: "UserSignInWithEmailMutation",
      selections: v1 /*: any*/,
      type: "Mutation",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "UserSignInWithEmailMutation",
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: "06c578790b11d3d8d8a077ed23a94829",
      id: null,
      metadata: {},
      name: "UserSignInWithEmailMutation",
      operationKind: "mutation",
      text:
        "mutation UserSignInWithEmailMutation(\n  $input: UserSignInWithEmailInput!\n) {\n  UserSignInWithEmail(input: $input) {\n    token\n    success\n    error\n  }\n}\n",
    },
  };
})();
(node as any).hash = "355b59cb389747aa807b20060c9473a5";
export default node;
