import * as React from "react";

import PodcastItemWithAvatar from "src/components/Podcast/PodcastItemWithAvatar/PodcastItemWithAvatar";

import {
  PodcastsWithOnlyAvatarContainer,
  PodcastsWithOnlyAvatarSection,
  PodcastsWithOnlyAvatarHeader,
  PodcastsWithOnlyAvatarHeaderTitle,
  PodcastsWithOnlyAvatarBreakLine,
} from "./PodcastsWithOnlyAvatar.styles";

interface Podcast {
  id: number;
  name: string;
  author: string;
  avatar: string;
}

interface PodcastsWithOnlyAvatarProps {
  title: string;
  items: Array<Podcast>;
}

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
        <PodcastsWithOnlyAvatarHeaderTitle>
          {title}
        </PodcastsWithOnlyAvatarHeaderTitle>
        <PodcastsWithOnlyAvatarBreakLine />
      </PodcastsWithOnlyAvatarHeader>

      <PodcastsWithOnlyAvatarSection>
        {renderItems()}
      </PodcastsWithOnlyAvatarSection>
    </PodcastsWithOnlyAvatarContainer>
  );
};

export default PodcastsWithOnlyAvatar;
