export type AuthContext = {};

export type AuthStateSchema = {
  states: {
    getstarted: {};
    signin: {};
    signup: {};
    forgot: {};
    success: {};
  };
};

export type AuthEvent =
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "SIGNIN" }
  | { type: "SIGNUP" }
  | { type: "FORGOT" }
  | { type: "GET_STARTED" }
  | { type: "SUCCESS" }
  | { type: "ERROR" };
