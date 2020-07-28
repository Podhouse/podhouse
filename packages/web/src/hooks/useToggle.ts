import { useState } from "react";
import { useMachine } from "@xstate/react";

import Toggle from "src/machines/Toggle/Toggle";

const useToggle = () => {
  const [current, send] = useMachine(Toggle);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    if (current.matches("unchecked")) {
      send("CHECK");
      setToggle(true);
    } else {
      send("UNCHECK");
      setToggle(false);
    }
  };

  return { toggle, handleToggle };
};

export default useToggle;
