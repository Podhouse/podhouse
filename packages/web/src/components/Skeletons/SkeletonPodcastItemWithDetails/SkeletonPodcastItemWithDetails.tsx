import React from "react";
import { Skeleton } from "@chakra-ui/react";

import {
  SkeletonPodcastItemWithDetailsContainer,
  SkeletonPodcastItemWithDetailsAvatar,
  PodcastItemInnerContainer,
} from "./SkeletonPodcastItemWithDetails.styles";

const SkeletonPodcastItemWithDetails = () => (
  <SkeletonPodcastItemWithDetailsContainer>
    <SkeletonPodcastItemWithDetailsAvatar>
      <Skeleton
        startColor="#E2E8F0"
        endColor="#E2E8F0"
        borderRadius={3}
        width="60px"
        height="60px"
      />
    </SkeletonPodcastItemWithDetailsAvatar>

    <PodcastItemInnerContainer>
      <Skeleton
        startColor="#E2E8F0"
        endColor="#E2E8F0"
        borderRadius={3}
        width="300px"
        height="30px"
      />

      <Skeleton
        startColor="#E2E8F0"
        endColor="#E2E8F0"
        borderRadius={3}
        width="300px"
        height="30px"
      />
    </PodcastItemInnerContainer>
  </SkeletonPodcastItemWithDetailsContainer>
);

export default SkeletonPodcastItemWithDetails;
