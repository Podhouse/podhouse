import { useState } from "react";
import { useMachine } from "@xstate/react";

import Auth from "src/machines/Auth/Auth";

const useAuth = () => {
  const [current, send] = useMachine(Auth);
  const [auth, setAuth] = useState<boolean>(false);

  const handleAuth = () => {
    if (auth === false) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  return {
    current,
    auth,
    handleAuth,
    send,
  };
};

export default useAuth;
