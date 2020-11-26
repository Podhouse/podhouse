export interface PodcastsWithDetailsListProps {
  title: string;
  podcasts: Array<{
    id: string;
    _id: string;
    name: string;
    author: string;
    image: string;
  }>;
}
