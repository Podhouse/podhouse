export interface PodcastsWithOnlyAvatarListProps {
  title: string;
  edges: ReadonlyArray<{
    readonly node: {
      readonly _id: string;
      readonly image: string;
    } | null;
  } | null>;
}
