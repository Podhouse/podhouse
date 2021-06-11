import { Interpreter } from "xstate";

import {
  MachineContext,
  MachineEvent,
  Episode,
} from "src/machines/Player/PlayerMachine.types";

export type UseAudio = () => {
  state: any;
  send: any;
  service: Interpreter<MachineContext, any, MachineEvent>;
  onCreateAudio: (src: string, episode: Episode) => HTMLAudioElement;
  onLoadAudio: (
    audio: HTMLAudioElement | undefined,
    src: string,
    episode: Episode
  ) => HTMLAudioElement;
  onDestroyAudio: (audio: HTMLAudioElement | undefined) => void;
};

export interface CreateAudioArgs {
  src: string;
  episode: Episode;
}
