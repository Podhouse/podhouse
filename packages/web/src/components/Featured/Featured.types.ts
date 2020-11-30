export interface FeaturedProps {
  featured: Array<FeaturedPodcast>;
}

export interface FeaturedPodcast {
  id: number;
  avatar: string;
  name: string;
  author: string;
  description: string;
}
