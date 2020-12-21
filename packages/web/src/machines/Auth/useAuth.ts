import { useState } from "react";
import { useMachine } from "@xstate/react";

import AuthMachine from "src/machines/Auth/AuthMachine";

const useAuth = () => {
  const [current, send] = useMachine(AuthMachine);
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
