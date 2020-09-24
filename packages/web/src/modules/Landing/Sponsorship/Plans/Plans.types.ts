export interface IPlan {
  category: string;
  price: number;
  available: number;
  taps: number;
  subscriptions: number;
}

export type IPlans = Array<IPlan>;

export interface Podcast {
  id: number;
  name: string;
  author: string;
  avatar: string;
  description: string;
}

export type Podcasts = Array<Podcast>;
