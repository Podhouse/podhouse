import { Machine } from "xstate";

import { AuthContext, AuthStateSchema, AuthEvent } from "./Auth.types";

const AuthMachine = Machine<AuthContext, AuthStateSchema, AuthEvent>({
  id: "auth",
  initial: "getstarted",
  states: {
    getstarted: {
      on: {
        SIGNIN: "signin",
        SIGNUP: "signup",
        FORGOT: "forgot",
      },
    },
    signin: {
      on: {
        SIGNUP: "signup",
        FORGOT: "forgot",
        GET_STARTED: "getstarted",
      },
    },
    signup: {
      on: {
        SIGNIN: "signin",
        FORGOT: "forgot",
        GET_STARTED: "getstarted",
      },
    },
    forgot: {
      on: {
        SIGNIN: "signin",
        SIGNUP: "signup",
        GET_STARTED: "getstarted",
      },
    },
    success: {
      type: "final",
    },
  },
});

export default AuthMachine;
