export interface Podcast {
  id: number;
  name: string;
  author: string;
  avatar: string;
}

export interface PodcastsWithOnlyAvatarListProps {
  title: string;
  items: Array<Podcast>;
}
