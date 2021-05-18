export type PodcastsResult = {
  status: true | false;
  feeds: Array<Podcast>;
  count: number;
  query: string;
  description: string;
};

export type PodcastResult = {
  status: true | false;
  feed: Podcast;
  count: number;
  query: string;
  description: string;
};

export type Podcast = {
  id: number;
  title: string;
  url: string;
  originalUrl: string;
  link: string;
  description: string;
  author: string;
  ownerName: string;
  image: string;
  artwork: string;
  lastUpdateTime: number;
  lastCrawlTime: number;
  lastParseTime: number;
  lastGoodHttpStatusTime: number;
  lastHttpStatus: number;
  contentType: string;
  itunesId: number;
  generator: string;
  language: string;
  type: 0 | 1;
  dead: number;
  crawlErrors: number;
  parseErrors: number;
  categories: Array<any>;
  locked: 0 | 1;
  imageUrlHash: number;
};

export type TrendingResult = {
  status: true | false;
  feeds: Array<TrendingItem>;
  count: number;
  max: number;
  since: number;
  description: string;
};

export type TrendingItem = {
  id: number;
  url: string;
  title: string;
  author: string;
  image: string;
  newestItemPublishedTime: number;
  itunesId: number;
  trendScore: number;
  language: string;
  categories: Array<any>;
};

export type EpisodesResult = {
  status: true | false;
  id: number;
  items: Array<Episode>;
  description: string;
};

export type EpisodeResult = {
  status: true | false;
  id: number;
  episode: Episode;
  description: string;
};

export type Episode = {
  id: number;
  title: string;
  link: string;
  description: string;
  guid: string;
  datePublished: number;
  datePublishedPretty: number;
  dateCrawled: string;
  enclosureUrl: string;
  enclosureType: string;
  enclosureLength: number;
  duration: number;
  explicit: 0 | 1;
  episode: number;
  episodeType: "full" | "trailer" | "bonus";
  season: number;
  image: string;
  feedItunesId: number;
  feedImage: string;
  feedId: number;
  feedLanguage: string;
  chaptersUrl: string;
  transcriptUrl: string;
  soundbite: {
    startTime: number;
    duration: number;
    title: string;
  };
  soundbites: Array<{
    startTime: number;
    duration: number;
    title: string;
  }>;
};
