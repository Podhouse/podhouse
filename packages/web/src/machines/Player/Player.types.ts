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

export type PlayerMachineContext = {
  episode: null | Episode;
  duration: number;
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
  duration: number;
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

export type UseAudioPlayerOptions = {
  idle: boolean;
  loading: boolean;
  ready: boolean;
  playing: boolean;
  paused: boolean;
  stopped: boolean;
  episode: Episode | null;
  seek: number;
  volume: number;
  muted: boolean;
  rate: number;
  loop: boolean;
  duration: number;
  ended: boolean;
  onLoad: (episode: Episode) => void;
  onToggle: () => void;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onMute: () => void;
  onLoop: () => void;
  onVolume: (value: number) => void;
  onRate: (value: string) => void;
  onSeek: (value: number) => void;
  onForward: () => void;
  onBackward: () => void;
};

export type UseAudioPlayer = () => UseAudioPlayerOptions;
