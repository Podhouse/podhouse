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
    initial: "idle",
    context: {
      muted: false,
      loop: false,
      error: null,
    },
    states: {
      idle: {
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
      onReady: assign<PlayerMachineContext, any>({
        muted: (_, event) => (event as PlayerOnReadyEvent).muted,
        loop: (_, event) => (event as PlayerOnReadyEvent).loop,
        error: (_, event) => (event as PlayerOnReadyEvent).error,
      }),
      onError: assign<PlayerMachineContext, any>({
        error: (_, event) => (event as PlayerOnErrorEvent).error,
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
