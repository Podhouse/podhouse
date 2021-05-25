import { Machine, assign } from "xstate";

import {
  PlayerMachineState,
  PlayerMachineContext,
  PlayerMachineEvents,
  PlayerReadyEvent,
  PlayerVolumeEvent,
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
      episode: null,
      duration: 0,
      volume: 0.5,
      rate: 1.0,
      muted: false,
      loop: false,
    },
    states: {
      idle: {
        on: {
          LOADING: "loading",
          ERROR: "error",
        },
      },
      loading: {
        on: {
          READY: {
            target: "ready",
            actions: "onReady",
          },
          ERROR: "error",
          RELOAD: {
            target: "",
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
            },
          },
          paused: {
            on: {
              PLAY: "playing",
              STOP: "stopped",
            },
          },
          stopped: {
            on: {
              PLAY: "playing",
            },
          },
        },
        on: {
          RELOAD: "loading",
          END: "ended",
          ERROR: "error",
          MUTE: {
            target: "",
            actions: "onMute",
          },
          LOOP: {
            target: "",
            actions: "onLoop",
          },
          VOLUME: {
            target: "",
            actions: "onVolume",
          },
        },
      },
      ended: {
        on: {
          RELOAD: "loading",
          PLAY: "ready",
        },
      },
      error: {
        on: {
          RETRY: "loading",
        },
      },
    },
  },
  {
    actions: {
      onReady: assign<PlayerMachineContext, any>({
        episode: (context, event) => (event as PlayerReadyEvent).episode,
        duration: (context, event) => (event as PlayerReadyEvent).duration,
      }),
      onVolume: assign<PlayerMachineContext, any>({
        volume: (context, event) => (event as PlayerVolumeEvent).volume,
      }),
      onRate: assign<PlayerMachineContext, any>({
        rate: (context, event) => event.rate,
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
