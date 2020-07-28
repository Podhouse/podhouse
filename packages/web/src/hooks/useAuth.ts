import { useMachine } from "@xstate/react";

import Auth from "src/machines/Auth/Auth";

const useAuth = () => {
  const [current, send] = useMachine(Auth);

  const handleAuth = () => {
    if (current.matches("idle")) {
      send("OPEN");
    } else {
      send("CLOSE");
    }
  };

  const logoutAuth = () => {
    send("LOGOUT");
    handleAuth();
  };

  return {
    auth: current,
    handleAuth,
    logoutAuth,
    send,
  };
};

export default useAuth;
