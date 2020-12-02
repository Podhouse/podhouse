export interface PodcastsWithOnlyAvatarListProps {
  title: string;
  data: {
    readonly subscriptions: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly _id: string;
          readonly image: string;
        } | null;
      } | null>;
    };
  };
}
