import { Machine } from "xstate";

import { AuthContext, AuthStateSchema, AuthEvent } from "./Auth.types";

const Auth = Machine<AuthContext, AuthStateSchema, AuthEvent>({
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
        RESET: "reset",
      },
    },
    signup: {
      on: {
        SIGNIN: "signin",
        FORGOT: "forgot",
      },
    },
    forgot: {
      on: {
        SIGNIN: "signin",
        SIGNUP: "signup",
      },
    },
    reset: {
      on: {
        SUCCESS: "success",
        ERROR: "signin",
      },
    },
    success: {
      type: "final",
    },
  },
});

export default Auth;
