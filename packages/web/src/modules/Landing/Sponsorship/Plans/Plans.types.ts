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

export type PodcastResult = {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: string;
  trackPrice: string;
  trackRentalPrice: string;
  collectionHdPrice: string;
  trackHdPrice: string;
  trackHdRentalPrice: string;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: Array<number>;
  genres: Array<string>;
};

export type PodcastResults = {
  resultCount: number;
  results: Array<PodcastResult>;
};
