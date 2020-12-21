import React from "react";
import { Skeleton } from "@chakra-ui/react";

import {
  SkeletonEpisodeContainer,
  SkeletonEpisodeAvatar,
  SkeletonEpisodeName,
  SkeletonEpisodeDescription,
  SkeletonEpisodePublishedDate,
  SkeletonEpisodeDuration,
  SkeletonEpisodeButton,
} from "./SkeletonEpisode.styles";

const SkeletonEpisode = () => (
  <SkeletonEpisodeContainer>
    <SkeletonEpisodeAvatar>
      <Skeleton
        startColor="#E2E8F0"
        endColor="#E2E8F0"
        borderRadius={3}
        width="80px"
        height="80px"
      />
    </SkeletonEpisodeAvatar>

    <SkeletonEpisodeName>
      <Skeleton
        startColor="#E2E8F0"
        endColor="#E2E8F0"
        borderRadius={3}
        width="100%"
        height="20px"
      />
    </SkeletonEpisodeName>

    <SkeletonEpisodeDescription>
      <Skeleton
        startColor="#E2E8F0"
        endColor="#E2E8F0"
        borderRadius={3}
        width="100%"
        height="50px"
      />
    </SkeletonEpisodeDescription>

    <SkeletonEpisodePublishedDate>
      <Skeleton
        startColor="#E2E8F0"
        endColor="#E2E8F0"
        borderRadius={3}
        width="100%"
        height="20px"
      />
    </SkeletonEpisodePublishedDate>

    <SkeletonEpisodeDuration>
      <Skeleton
        startColor="#E2E8F0"
        endColor="#E2E8F0"
        borderRadius={3}
        width="100%"
        height="20px"
      />
    </SkeletonEpisodeDuration>

    <SkeletonEpisodeButton>
      <Skeleton
        startColor="#E2E8F0"
        endColor="#E2E8F0"
        borderRadius={3}
        width="100%"
        height="20px"
      />
    </SkeletonEpisodeButton>
  </SkeletonEpisodeContainer>
);

export default SkeletonEpisode;
