import { useMachine } from "@xstate/react";

import Shortcuts from "src/machines/Shortcuts/Shortcuts";

const useShortcuts = () => {
  const [current, send] = useMachine(Shortcuts);

  const handleShortcuts = () => {
    if (current.matches("close")) {
      send("OPEN");
    } else {
      send("CLOSE");
    }
  };

  return { shortcuts: current, handleShortcuts };
};

export default useShortcuts;
