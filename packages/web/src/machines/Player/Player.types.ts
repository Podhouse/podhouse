import { Episode } from "src/queries/types";

export type PlayerMachineContext = {
  episode: null | Episode;
  volume: number;
  rate: number;
  muted: boolean;
  loop: boolean;
};

export type PlayerMachineState = {
  states: {
    idle: {};
    loading: {};
    ready: {
      states: {
        playing: {};
        paused: {};
        stopped: {};
      };
    };
    ended: {};
    error: {};
  };
};

export type PlayerLoadingEvent = {
  type: "LOADING";
};

export type PlayerReadyEvent = {
  type: "READY";
  episode: Episode;
};

export type PlayerPlayEvent = {
  type: "PLAY";
};

export type PlayerPauseEvent = {
  type: "PAUSE";
};

export type PlayerStopEvent = {
  type: "STOP";
};

export type PlayerMuteEvent = {
  type: "MUTE";
};

export type PlayerLoopEvent = {
  type: "LOOP";
};

export type PlayerEndedEvent = {
  type: "END";
};

export type PlayerReloadEvent = {
  type: "RELOAD";
};

export type PlayerOnErrorEvent = {
  type: "ERROR";
};

export type PlayerRetryEvent = {
  type: "RETRY";
};

export type PlayerVolumeEvent = {
  type: "VOLUME";
  volume: number;
};

export type PlayerRateEvent = {
  type: "RATE";
  rate: number;
};

export type PlayerEpisodeEvent = {
  type: "EPISODE";
  episode: Episode;
};

export type PlayerMachineEvents =
  | PlayerLoadingEvent
  | PlayerReadyEvent
  | PlayerPlayEvent
  | PlayerPauseEvent
  | PlayerStopEvent
  | PlayerMuteEvent
  | PlayerLoopEvent
  | PlayerEndedEvent
  | PlayerReloadEvent
  | PlayerOnErrorEvent
  | PlayerRetryEvent
  | PlayerVolumeEvent
  | PlayerRateEvent
  | PlayerEpisodeEvent;
