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
      <Skeleton width="80px" height="80px" />
    </SkeletonEpisodeAvatar>

    <SkeletonEpisodeName>
      <Skeleton width="100%" height="20px" />
    </SkeletonEpisodeName>

    <SkeletonEpisodeDescription>
      <Skeleton width="100%" height="50px" />
    </SkeletonEpisodeDescription>

    <SkeletonEpisodePublishedDate>
      <Skeleton width="100%" height="20px" />
    </SkeletonEpisodePublishedDate>

    <SkeletonEpisodeDuration>
      <Skeleton width="100%" height="20px" />
    </SkeletonEpisodeDuration>

    <SkeletonEpisodeButton>
      <Skeleton width="100%" height="20px" />
    </SkeletonEpisodeButton>
  </SkeletonEpisodeContainer>
);

export default SkeletonEpisode;
