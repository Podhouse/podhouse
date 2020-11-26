import React from "react";
import { Heading, Divider } from "@chakra-ui/react";

import {
  PodcastsWithOnlyAvatarContainer,
  PodcastsWithOnlyAvatarSection,
  PodcastsWithOnlyAvatarHeader,
} from "./PodcastsWithOnlyAvatar.styles";

import PodcastItemWithAvatar from "src/components/Podcast/PodcastItemWithAvatar/PodcastItemWithAvatar";

import {
  Podcast,
  PodcastsWithOnlyAvatarProps,
} from "./PodcastsWithOnlyAvatar.types";

const PodcastsWithOnlyAvatar = ({
  title,
  items,
}: PodcastsWithOnlyAvatarProps) => {
  const renderItems = () =>
    items.map((item: Podcast) => (
      <PodcastItemWithAvatar key={item.id} podcast={item} />
    ));

  return (
    <PodcastsWithOnlyAvatarContainer>
      <PodcastsWithOnlyAvatarHeader>
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
      </PodcastsWithOnlyAvatarHeader>

      <PodcastsWithOnlyAvatarSection>
        {renderItems()}
      </PodcastsWithOnlyAvatarSection>
    </PodcastsWithOnlyAvatarContainer>
  );
};

export default PodcastsWithOnlyAvatar;
