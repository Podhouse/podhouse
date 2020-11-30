import React from "react";
import { Heading, Divider } from "@chakra-ui/react";

import {
  PodcastsWithOnlyAvatarListContainer,
  PodcastsWithOnlyAvatarListSection,
  PodcastsWithOnlyAvatarListHeader,
} from "./PodcastsWithOnlyAvatarList.styles";

import PodcastItemWithAvatar from "src/components/Podcast/PodcastItemWithAvatar/PodcastItemWithAvatar";

import {
  Podcast,
  PodcastsWithOnlyAvatarListProps,
} from "./PodcastsWithOnlyAvatarList.types";

const PodcastsWithOnlyAvatarList = ({
  title,
  items,
}: PodcastsWithOnlyAvatarListProps) => {
  const renderItems = () =>
    items.map((item: Podcast) => (
      <PodcastItemWithAvatar key={item.id} podcast={item} />
    ));

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
        {renderItems()}
      </PodcastsWithOnlyAvatarListSection>
    </PodcastsWithOnlyAvatarListContainer>
  );
};

export default PodcastsWithOnlyAvatarList;
