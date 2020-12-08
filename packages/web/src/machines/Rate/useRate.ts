import { useMachine } from "@xstate/react";

import Rate from "src/machines/Rate/RateMachine";

const useRate = () => {
  const [current, send] = useMachine(Rate);

  const handleRate = () => {
    if (current.matches("close")) {
      send("OPEN");
    } else {
      send("CLOSE");
    }
  };

  return { rate: current, handleRate };
};

export default useRate;
