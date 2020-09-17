export interface PodcastProps {
  ready: boolean;
  currentPodcast: {
    avatar: string;
    name: string;
    episode: string;
  };
}

export interface PodcastAvatarProps {
  avatar: string;
}
