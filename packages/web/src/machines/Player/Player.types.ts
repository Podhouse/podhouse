export type PlayerMachineContext = {
  name: string | null;
  episode: string | null;
  avatar: string | null;
  error: string | null;
};

export type PlayerMachineState = {
  states: {
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

export type PlayerLoadEvent = {
  type: 'LOAD';
};

export type PlayerReadyEvent = {
  type: 'READY';
};

export type PlayerPlayEvent = {
  type: 'PLAY';
};

export type PlayerPauseEvent = {
  type: 'PAUSE';
};

export type PlayerStopEvent = {
  type: 'STOP';
};

export type PlayerMuteEvent = {
  type: 'MUTE';
};

export type PlayerLoopEvent = {
  type: 'LOOP';
};

export type PlayerEndEvent = {
  type: 'END';
};

export type PlayerOnErrorEvent = {
  type: 'ERROR';
  error: string;
};

export type PlayerOnReadyEvent = {
  type: 'READY';
  name: string;
  episode: string;
  avatar: string;
};

export type PlayerRetryEvent = {
  type: 'RETRY';
};

export type PlayerMachineEvents =
  | PlayerLoadEvent
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