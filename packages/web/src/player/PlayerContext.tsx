import { createContext } from "react";

import { PlayerStateContext } from "./Player.types";

const PlayerContext = createContext<PlayerStateContext | undefined>(
  undefined as any
);

export default PlayerContext;
