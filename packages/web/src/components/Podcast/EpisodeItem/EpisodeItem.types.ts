export interface EpisodeItemProps {
  node: {
    readonly _id: string;
    readonly title: string;
    readonly description: string;
    readonly publishedDate: string;
    readonly link: string;
    readonly image: string;
    readonly audio: string;
    readonly duration: string;
    readonly podcast: {
      readonly _id: string;
      readonly name: string;
      readonly website: string;
      readonly rss: string;
    };
  };
}
