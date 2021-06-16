import React from "react";
import { Skeleton } from "@chakra-ui/react";

import {
  SkeletonPodcastContainer,
  SkeletonPodcastAvatar,
  SkeletonPodcastDetails,
  SkeletonPodcastNameTitle,
} from "./SkeletonPodcast.styles";

const SkeletonPodcast = () => (
  <SkeletonPodcastContainer>
    <SkeletonPodcastAvatar>
      <Skeleton width="40px" height="40px" />
    </SkeletonPodcastAvatar>

    <SkeletonPodcastDetails>
      <SkeletonPodcastNameTitle>
        <Skeleton width="100%" height="20px" />
      </SkeletonPodcastNameTitle>

      <SkeletonPodcastNameTitle>
        <Skeleton width="100%" height="20px" />
      </SkeletonPodcastNameTitle>
    </SkeletonPodcastDetails>
  </SkeletonPodcastContainer>
);

export default SkeletonPodcast;
