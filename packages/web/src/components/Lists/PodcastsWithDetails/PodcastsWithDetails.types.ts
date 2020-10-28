export interface Podcast {
  id: number;
  name: string;
  author: string;
  avatar: string;
}

export interface PodcastsWithDetailsProps {
  title: string;
  items: Array<Podcast>;
}
