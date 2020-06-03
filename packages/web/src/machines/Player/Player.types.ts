export type PlayerContext = {
  name: string;
  episode: string;
  avatar: string;
  duration: string;
};

export type PlayerStateSchema = {
  states: {
    loading: {};
    ready: {
      states: {
        playing: {};
        paused: {};
        ended: {};
      };
    };
    error: {};
  };
};

export type PlayerEvent =
  | { type: "LOADED" }
  | { type: "ERROR" }
  | { type: "PLAY" }
  | { type: "PAUSE" }
  | { type: "END" }
  | { type: "RETRY" };
