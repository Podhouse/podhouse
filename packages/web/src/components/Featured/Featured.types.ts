import { WithTranslation } from "next-i18next";

export type FeaturedProps = WithTranslation & {
  featured: Array<FeaturedPodcast>;
};

export interface FeaturedPodcast {
  id: number;
  avatar: string;
  name: string;
  author: string;
  description: string;
}
