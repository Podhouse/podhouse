import React, { memo } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  MobilePodcastContainer,
  MobilePodcastImage,
} from "./MobilePodcast.styles";

import { Episode } from "src/queries/types";

interface Props {
  episode: Episode;
}

const MobilePodcast = ({ episode }: Props) => {
  return (
    <MobilePodcastContainer>
      <MobilePodcastImage
        to={{
          pathname: `/episode/${episode?.id}`,
          state: { id: episode?.id },
        }}
        href={`/episode/${episode?.id}`}
        as={ReactRouterLink}
        src={episode?.image}
        lazy="loading"
      />
    </MobilePodcastContainer>
  );
};

export default memo(MobilePodcast);
