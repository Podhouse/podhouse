import { Machine, assign } from "xstate";

import {
  PlayerMachineContext,
  PlayerMachineState,
  PlayerMachineEvents,
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
      volume: 0.5,
      rate: 1.0,
      muted: false,
      loop: false,
    },
    states: {
      idle: {
        on: {
          LOADING: {
            target: "loading",
            actions: "onLoading",
          },
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
          RELOAD: "idle",
          END: "ended",
          ERROR: "error",
          EPISODE: {
            target: "",
            actions: "onEpisode",
          },
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
        entry: "onEnded",
        on: {
          RELOAD: "idle",
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
      onLoading: (context, event) => {
        console.log("onLoading...");
      },
      onReady: assign<PlayerMachineContext, any>({
        episode: (context, event) => event.episode,
      }),
      onVolume: assign<PlayerMachineContext, any>({
        volume: (context, event) => event.volume,
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
      onEnded: (context, event) => {
        console.log("onAudioEnded...");
      },
      onError: (context, event) => {
        console.log("onAudioEnded...");
      },
    },
    guards: {
      episodeExists: (context: PlayerMachineContext, event) => {
        // Check if episode is not null
        return context.episode !== null;
      },
    },
  }
);

export default Player;
