export type Episode = {
  id: number;
  title: string;
  link: string;
  description: string;
  guid: string;
  datePublished: number;
  datePublishedPretty: string;
  dateCrawled: number;
  enclosureUrl: string;
  enclosureType: string;
  enclosureLength: number;
  duration: number;
  explicit: 0 | 1;
  episode: number;
  episodeType: "full" | "trailer" | "bonus";
  season: number;
  image: string;
  feedItunesId: number;
  feedImage: string;
  feedId: number;
  feedLanguage: string;
  chaptersUrl: string;
  transcriptUrl: string;
  soundbite: {
    startTime: number;
    duration: number;
    title: string;
  };
  soundbites: Array<{
    startTime: number;
    duration: number;
    title: string;
  }>;
};

export type MachineContext = {
  episode: null | Episode;
  volume: number;
  rate: number;
  duration: number;
  mute: boolean;
  loop: boolean;
  error: string | null;
};

export type MachineState = {
  states: {
    initial: {};
    loading: {};
    ready: {
      states: {
        idle: {};
        playing: {};
        paused: {};
      };
    };
    ended: {};
    error: {};
  };
};

export type MachineEvent =
  | MachineLoadEvent
  | MachineReadyEvent
  | MachinePlayEvent
  | MachinePauseEvent
  | MachineStopEvent
  | MachineVolumeEvent
  | MachineRateEvent
  | MachineMuteEvent
  | MachineLoopEvent
  | MachineEndEvent
  | MachineErrorEvent
  | MachineRetryEvent;

export type MachineLoadEvent = {
  type: "LOAD";
  volume: number;
  rate: number;
  mute: boolean;
  loop: boolean;
};

export type MachineReadyEvent = {
  type: "READY";
  duration: number;
};

export type MachinePlayEvent = {
  type: "PLAY";
};

export type MachinePauseEvent = {
  type: "PAUSE";
};

export type MachineStopEvent = {
  type: "STOP";
};

export type MachineVolumeEvent = {
  type: "VOLUME";
  volume: number;
};

export type MachineRateEvent = {
  type: "RATE";
  rate: number;
};

export type MachineMuteEvent = {
  type: "MUTE";
};

export type MachineLoopEvent = {
  type: "LOOP";
};

export type MachineEndEvent = {
  type: "END";
};

export type MachineErrorEvent = {
  type: "ERROR";
  error: string;
};

export type MachineRetryEvent = {
  type: "RETRY";
};
