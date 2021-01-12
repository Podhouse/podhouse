export interface PodcastsWithOnlyAvatarListProps {
  title: string;
  edges: ReadonlyArray<{
    readonly node: {
      readonly id: string;
      readonly _id: string;
      readonly name: string;
      readonly appleId: number;
      readonly image: string;
    } | null;
  } | null>;
}
