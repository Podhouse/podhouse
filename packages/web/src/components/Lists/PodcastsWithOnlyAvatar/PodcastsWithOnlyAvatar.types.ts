export interface Podcast {
  id: number;
  name: string;
  author: string;
  avatar: string;
}

export interface PodcastsWithOnlyAvatarProps {
  title: string;
  items: Array<Podcast>;
}
