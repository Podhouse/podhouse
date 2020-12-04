export type PlayerMachineContext = {
  muted: boolean;
  loop: boolean;
  error: string | null;
};

export type PlayerMachineState = {
  states: {
    idle: {};
    loading: {};
    ready: {
      states: {
        idle: {};
        playing: {};
        paused: {};
        stopped: {};
        ended: {};
        error: {};
      };
    };
    error: {};
  };
};

export type PlayerLoadingEvent = {
  type: "LOADING";
};

export type PlayerReadyEvent = {
  type: "READY";
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

export type PlayerEndEvent = {
  type: "END";
};

export type PlayerOnErrorEvent = {
  type: "ERROR";
  error: string;
};

export type PlayerOnReadyEvent = {
  type: "READY";
  muted: boolean;
  loop: boolean;
  error: null;
};

export type PlayerRetryEvent = {
  type: "RETRY";
};

export type PlayerMachineEvents =
  | PlayerLoadingEvent
  | PlayerReadyEvent
  | PlayerPlayEvent
  | PlayerPauseEvent
  | PlayerStopEvent
  | PlayerMuteEvent
  | PlayerLoopEvent
  | PlayerEndEvent
  | PlayerOnErrorEvent
  | PlayerOnReadyEvent
  | PlayerRetryEvent;

export interface UsePlayerOptions {
  volume?: number;
  muted?: boolean;
  loop?: boolean;
  rate?: number;
  onReady?: () => void;
  onError?: () => void;
  onPlaying?: () => void;
  onPaused?: () => void;
  onStopped?: () => void;
  onMuted?: () => void;
  onLooped?: () => void;
  onEnded?: () => void;
}

export interface LoadAudioOptions {
  src: string;
  volume: number;
  muted: boolean;
  loop: boolean;
  rate: number;
}

export interface PlayerStateContext {
  audio: HTMLAudioElement | null;
  load: (args: LoadAudioOptions) => void;
  idle: boolean;
  ready: boolean;
  error: string | null;
  playing: boolean;
  paused: boolean;
  stopped: boolean;
  muted: boolean;
  loop: boolean;
  send: any;
}

export type PlayerEpisode = {
  readonly _id: string;
  readonly title: string;
  readonly description: string;
  readonly publishedDate: string;
  readonly link: string;
  readonly image: string;
  readonly audio: string;
  readonly duration: string;
  readonly podcast: {
    readonly _id: string;
    readonly name: string;
    readonly website: string;
    readonly rss: string;
  };
} | null;
