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
      <Skeleton borderRadius={3} width="80px" height="80px" />
    </SkeletonEpisodeAvatar>

    <SkeletonEpisodeName>
      <Skeleton borderRadius={3} width="100%" height="20px" />
    </SkeletonEpisodeName>

    <SkeletonEpisodeDescription>
      <Skeleton borderRadius={3} width="100%" height="50px" />
    </SkeletonEpisodeDescription>

    <SkeletonEpisodePublishedDate>
      <Skeleton borderRadius={3} width="100%" height="20px" />
    </SkeletonEpisodePublishedDate>

    <SkeletonEpisodeDuration>
      <Skeleton borderRadius={3} width="100%" height="20px" />
    </SkeletonEpisodeDuration>

    <SkeletonEpisodeButton>
      <Skeleton borderRadius={3} width="100%" height="20px" />
    </SkeletonEpisodeButton>
  </SkeletonEpisodeContainer>
);

export default SkeletonEpisode;
