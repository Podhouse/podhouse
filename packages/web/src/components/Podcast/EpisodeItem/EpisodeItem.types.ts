export interface EpisodeItemProps {
  readonly episode: {
    readonly id: string;
    readonly _id: string;
    readonly title: string;
    readonly description: string;
    readonly publishedDate: string;
    readonly link: string;
    readonly image: string;
    readonly audio: string;
    readonly duration: string;
  } | null;
}
