import { Machine } from "xstate";

import { AuthContext, AuthStateSchema, AuthEvent } from "./Auth.types";

const Auth = Machine<AuthContext, AuthStateSchema, AuthEvent>({
  id: "auth",
  initial: "idle",
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
      initial: "signin",
      states: {
        signin: {
          on: {
            SIGNUP: "signup",
            FORGOT: "forgot",
            SUBMITTING: "submitting",
          },
        },
        signup: {
          on: {
            SIGNIN: "signin",
            SUBMITTING: "submitting",
          },
        },
        forgot: {
          on: {
            SIGNIN: "signin",
            SUBMITTING: "submitting",
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
