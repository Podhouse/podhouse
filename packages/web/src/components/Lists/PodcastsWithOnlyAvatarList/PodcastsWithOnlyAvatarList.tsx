import React from "react";
import { Heading, Divider } from "@chakra-ui/react";

import {
  PodcastsWithOnlyAvatarListContainer,
  PodcastsWithOnlyAvatarListSection,
  PodcastsWithOnlyAvatarListHeader,
} from "./PodcastsWithOnlyAvatarList.styles";

import PodcastItemWithAvatar from "src/components/Podcast/PodcastItemWithAvatar/PodcastItemWithAvatar";

import { PodcastsWithOnlyAvatarListProps } from "./PodcastsWithOnlyAvatarList.types";

const PodcastsWithOnlyAvatarList = ({
  title,
  edges,
}: PodcastsWithOnlyAvatarListProps) => {
  return (
    <PodcastsWithOnlyAvatarListContainer>
      <PodcastsWithOnlyAvatarListHeader>
        <Heading
          as="h1"
          variant="secondary"
          size="normal"
          fontSize={14}
          fontWeight={500}
          textAlign="start"
        >
          {title}
        </Heading>
        <Divider orientation="horizontal" />
      </PodcastsWithOnlyAvatarListHeader>

      <PodcastsWithOnlyAvatarListSection>
        {edges.map(({ node }: any) => (
          <PodcastItemWithAvatar key={node._id} node={node} />
        ))}
      </PodcastsWithOnlyAvatarListSection>
    </PodcastsWithOnlyAvatarListContainer>
  );
};

export default PodcastsWithOnlyAvatarList;
