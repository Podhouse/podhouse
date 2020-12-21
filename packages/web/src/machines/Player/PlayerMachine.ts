import { Machine, assign } from "xstate";

import {
  PlayerMachineContext,
  PlayerMachineState,
  PlayerMachineEvents,
  PlayerOnReadyEvent,
} from "./Player.types";

const Player = Machine<
  PlayerMachineContext,
  PlayerMachineState,
  PlayerMachineEvents
>(
  {
    id: "player",
    initial: "initial",
    context: {
      muted: false,
      loop: false,
    },
    states: {
      initial: {
        on: {
          LOADING: "loading",
          ERROR: {
            target: "error",
            actions: "onError",
          },
        },
      },
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
        initial: "playing",
        states: {
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
        },
        on: {
          RELOAD: "initial",
          END: "end",
          ERROR: "initial",
        },
      },
      end: {
        on: {
          RELOAD: "initial",
          PLAY: "ready",
          ERROR: "initial",
        },
      },
      error: {
        type: "final",
      },
    },
  },
  {
    actions: {
      onReady: assign<PlayerMachineContext, any>({
        muted: (_, event) => (event as PlayerOnReadyEvent).muted,
        loop: (_, event) => (event as PlayerOnReadyEvent).loop,
      }),
      onMute: assign<PlayerMachineContext, PlayerMachineEvents>({
        muted: (context) => !context.muted,
      }),
      onLoop: assign<PlayerMachineContext, PlayerMachineEvents>({
        loop: (context) => !context.loop,
      }),
    },
  }
);

export default Player;
