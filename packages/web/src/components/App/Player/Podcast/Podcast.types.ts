import { PlayerEpisode } from "src/player/Player.types";

export interface PodcastProps {
  ready: boolean;
  episode: PlayerEpisode | null;
}

export interface PodcastAvatarProps {
  avatar: string;
}
