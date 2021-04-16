import React from "react";
import { Heading, Divider } from "@chakra-ui/react";

import {
  PodcastsWithOnlyAvatarListContainer,
  PodcastsWithOnlyAvatarListSection,
  PodcastsWithOnlyAvatarListHeader,
} from "./PodcastsWithOnlyAvatarList.styles";

import PodcastItemWithAvatar from "src/components/Podcast/PodcastItemWithAvatar/PodcastItemWithAvatar";

const PodcastsWithOnlyAvatarList = () => (
  <PodcastsWithOnlyAvatarListContainer>
    <PodcastsWithOnlyAvatarListHeader>
      <Heading
        as="h1"
        fontSize={16}
        fontWeight="600"
        letterSpacing="-0.03em"
        lineHeight="30px"
        textAlign="start"
      >
        PodcastsWithOnlyAvatarList
      </Heading>
      <Divider orientation="horizontal" />
    </PodcastsWithOnlyAvatarListHeader>

    <PodcastsWithOnlyAvatarListSection>
      <PodcastItemWithAvatar key="1" />
      <PodcastItemWithAvatar key="2" />
      <PodcastItemWithAvatar key="3" />
      <PodcastItemWithAvatar key="4" />
    </PodcastsWithOnlyAvatarListSection>
  </PodcastsWithOnlyAvatarListContainer>
);

export default PodcastsWithOnlyAvatarList;
