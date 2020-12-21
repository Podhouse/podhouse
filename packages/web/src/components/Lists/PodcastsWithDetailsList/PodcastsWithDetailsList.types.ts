export interface PodcastsWithDetailsListProps {
  title: string;
  readonly podcasts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly _id: string;
        readonly name: string;
        readonly author: string;
        readonly image: string;
      } | null;
    } | null>;
  };
}
