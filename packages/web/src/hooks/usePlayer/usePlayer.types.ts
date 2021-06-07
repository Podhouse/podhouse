import { Episode } from "src/machines/Player/PlayerMachine.types";

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
  initial: boolean;
  loading: boolean;
  ready: boolean;
  idle: boolean;
  playing: boolean;
  paused: boolean;
  end: boolean;
  episode: Episode | null;
  seek: number;
  volume: number;
  rate: number;
  duration: number;
  mute: boolean;
  loop: boolean;
  error: string | null;
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
