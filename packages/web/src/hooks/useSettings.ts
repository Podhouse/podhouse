import { useMachine } from "@xstate/react";

import Settings from "../machines/Settings/Settings";

const useSettings = () => {
  const [current, send] = useMachine(Settings);

  const handleSettings = () => {
    if (current.matches("close")) {
      send("OPEN");
    } else {
      send("CLOSE");
    }
  };

  return { settings: current, handleSettings };
};

export default useSettings;
