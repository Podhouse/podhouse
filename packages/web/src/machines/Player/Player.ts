import { Machine, assign } from "xstate";

import {
  PlayerMachineContext,
  PlayerMachineState,
  PlayerMachineEvents,
  PlayerOnReadyEvent,
  PlayerOnErrorEvent,
} from "./Player.types";

const Player = Machine<
  PlayerMachineContext,
  PlayerMachineState,
  PlayerMachineEvents
>(
  {
    id: "player",
    initial: "loading",
    context: {
      name: null,
      episode: null,
      avatar: null,
      error: null,
    },
    states: {
      loading: {
        on: {
          READY: {
            target: "ready",
            actions: "onReady",
          },
          ERROR: {
            target: "error",
            actions: "onError",
          },
        },
      },
      ready: {
        initial: "idle",
        states: {
          idle: {
            on: {
              PLAY: "playing",
              MUTE: {
                target: "",
                actions: "onMute",
              },
              LOOP: {
                target: "",
                actions: "onLoop",
              },
            },
          },
          playing: {
            on: {
              PAUSE: "paused",
              STOP: "stopped",
              MUTE: {
                target: "",
                actions: "onMute",
              },
              LOOP: {
                target: "",
                actions: "onLoop",
              },
              END: "ended",
              ERROR: {
                target: "error",
                actions: "onError",
              },
            },
          },
          paused: {
            on: {
              PLAY: "playing",
              STOP: "stopped",
              MUTE: {
                target: "",
                actions: "onMute",
              },
              LOOP: {
                target: "",
                actions: "onLoop",
              },
              END: "ended",
            },
          },
          stopped: {
            on: {
              PLAY: "playing",
              MUTE: {
                target: "",
                actions: "onMute",
              },
              LOOP: {
                target: "",
                actions: "onLoop",
              },
            },
          },
          ended: {
            on: {
              RETRY: "idle",
            },
          },
          error: {
            type: "final",
          },
        },
      },
      error: {
        type: "final",
      },
    },
  },
  {
    actions: {
      onError: assign<PlayerMachineContext, any>({
        error: (_, event) => (event as PlayerOnErrorEvent).error,
      }),
      onReady: assign<PlayerMachineContext, any>({
        name: (_, event) => (event as PlayerOnReadyEvent).name,
        episode: (_, event) => (event as PlayerOnReadyEvent).episode,
        avatar: (_, event) => (event as PlayerOnReadyEvent).avatar,
      }),
    },
  },
);

export default Player;
