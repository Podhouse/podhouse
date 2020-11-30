export interface EpisodeItemProps {
  episode: {
    name: string;
    description: string;
    avatar: string;
    publishedDate: string;
    duration: string;
  };
  loading?: boolean;
}
