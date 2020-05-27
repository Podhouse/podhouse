import { Machine } from "xstate";

import { PlayerContext, PlayerStateSchema, PlayerEvent } from "./Player.types";

const Player = Machine<PlayerContext, PlayerStateSchema, PlayerEvent>({
  id: "player",
  initial: "loading",
  context: {
    name: null,
    episode: null,
    avatar: null,
    duration: null,
  },
  states: {
    loading: {
      on: {
        LOADED: "ready",
        ERROR: "error",
      },
    },
    ready: {
      initial: "playing",
      states: {
        playing: {
          on: {
            PAUSE: "paused",
            END: "ended",
          },
        },
        paused: {
          on: {
            PLAY: "playing",
            END: "ended",
          },
        },
        ended: {
          on: {
            RETRY: "playing",
          },
        },
      },
    },
    error: {
      on: {
        RETRY: "loading",
      },
    },
  },
});

export default Player;
