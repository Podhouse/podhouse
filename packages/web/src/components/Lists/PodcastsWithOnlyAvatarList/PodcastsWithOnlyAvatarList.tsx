import React from "react";
import { Heading, Divider } from "@chakra-ui/react";

import {
  PodcastsWithOnlyAvatarListContainer,
  PodcastsWithOnlyAvatarListSection,
  PodcastsWithOnlyAvatarListHeader,
} from "./PodcastsWithOnlyAvatarList.styles";

import { PodcastsWithOnlyAvatarListProps } from "./PodcastsWithOnlyAvatarList.types";

const PodcastsWithOnlyAvatarList = ({
  title,
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

      <PodcastsWithOnlyAvatarListSection />
    </PodcastsWithOnlyAvatarListContainer>
  );
};

export default PodcastsWithOnlyAvatarList;
