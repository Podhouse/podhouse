import React from "react";
import { Heading, Divider } from "@chakra-ui/react";

import {
  PodcastsWithOnlyAvatarListContainer,
  PodcastsWithOnlyAvatarListSection,
  PodcastsWithOnlyAvatarListHeader,
} from "./PodcastsWithOnlyAvatarList.styles";

import PodcastItemWithAvatar from "src/components/Podcast/PodcastItemWithAvatar/PodcastItemWithAvatar";

import { TrendingItem } from "src/queries/types";

interface Props {
  title: string;
  feeds: Array<TrendingItem>;
}

const PodcastsWithOnlyAvatarList = ({ title, feeds }: Props) => {
  return (
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
          {title}
        </Heading>
        <Divider orientation="horizontal" />
      </PodcastsWithOnlyAvatarListHeader>

      <PodcastsWithOnlyAvatarListSection>
        {feeds.map(({ id, image }: TrendingItem) => (
          <PodcastItemWithAvatar key={id} id={id} image={image} />
        ))}
      </PodcastsWithOnlyAvatarListSection>
    </PodcastsWithOnlyAvatarListContainer>
  );
};

export default PodcastsWithOnlyAvatarList;
