import { Machine } from "xstate";

import { AuthContext, AuthStateSchema, AuthEvent } from "./Auth.types";

const Auth = Machine<AuthContext, AuthStateSchema, AuthEvent>({
  id: "auth",
  initial: "loggedIn",
  states: {
    idle: {
      on: {
        OPEN: "open",
      },
    },
    open: {
      on: {
        CLOSE: "idle",
      },
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
            SUBMITTING: "submitting",
          },
        },
        submitting: {
          on: {
            SUCCESS: "success",
            ERROR: "signin",
          },
        },
        success: {
          type: "final",
        },
      },
    },
    loggedIn: {
      on: {
        LOGOUT: "idle",
      },
    },
  },
});

export default Auth;
