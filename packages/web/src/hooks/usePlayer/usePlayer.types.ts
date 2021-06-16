import { State, Interpreter } from "xstate";

import {
  MachineContext,
  MachineEvent,
  Episode,
} from "src/machines/Player/PlayerMachine.types";

export interface Args {
  src: string;
  preload?: "auto" | "metadata" | "none";
  autoplay?: boolean;
  volume?: number;
  rate?: number;
  mute?: boolean;
  loop?: boolean;
}

export type ReturnArgs = {
  state: State<
    MachineContext,
    MachineEvent,
    any,
    {
      value: any;
      context: MachineContext;
    }
  >;
  send: any;
  service: Interpreter<MachineContext, any, MachineEvent>;
  seek: number;
  onToggle: (episode: Episode) => void;
  onPlay: () => void;
  onPause: () => void;
  onVolume: (value: number) => void;
  onRate: (value: string) => void;
  onMute: () => void;
  onLoop: () => void;
  onSeek: (value: number) => void;
  onForward: (value: number) => void;
  onBackward: (value: number) => void;
};
