import React from "react";
import { Heading, Divider } from "@chakra-ui/react";

import {
  PodcastsWithOnlyAvatarListContainer,
  PodcastsWithOnlyAvatarListSection,
  PodcastsWithOnlyAvatarListHeader,
} from "./PodcastsWithOnlyAvatarList.styles";

import PodcastItemWithAvatar from "src/components/Podcast/PodcastItemWithAvatar/PodcastItemWithAvatar";

interface Props {
  title: string;
  readonly podcasts:
    | {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly id: string;
            readonly _id: string;
            readonly name: string;
            readonly appleId: number;
            readonly image: string;
          } | null;
        } | null>;
      }
    | undefined;
}

const PodcastsWithOnlyAvatarList = ({ title, podcasts }: Props) => (
  <PodcastsWithOnlyAvatarListContainer>
    <PodcastsWithOnlyAvatarListHeader>
      <Heading
        as="h1"
        variant="secondary"
        size="normal"
        fontSize={14}
        fontWeight="500"
        textAlign="start"
      >
        {title}
      </Heading>
      <Divider orientation="horizontal" />
    </PodcastsWithOnlyAvatarListHeader>

    <PodcastsWithOnlyAvatarListSection>
      {podcasts === undefined
        ? null
        : podcasts.edges.map(({ node }: any) => (
            <PodcastItemWithAvatar key={node._id} node={node} />
          ))}
    </PodcastsWithOnlyAvatarListSection>
  </PodcastsWithOnlyAvatarListContainer>
);

export default PodcastsWithOnlyAvatarList;
