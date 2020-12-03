import React from "react";
import { Divider, Skeleton } from "@chakra-ui/react";

import {
  Container,
  SkeletonPodcastsWithOnlyAvatarListContainer,
  SkeletonPodcastsWithOnlyAvatarListSection,
  SkeletonPodcastsWithOnlyAvatarListHeader,
} from "./SkeletonPodcastsWithOnlyAvatarList.styles";

const SkeletonPodcastsWithOnlyAvatarList = () => (
  <Container>
    <SkeletonPodcastsWithOnlyAvatarListContainer>
      <SkeletonPodcastsWithOnlyAvatarListHeader>
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="100%"
          height="30px"
        />
        <Divider orientation="horizontal" />
      </SkeletonPodcastsWithOnlyAvatarListHeader>

      <SkeletonPodcastsWithOnlyAvatarListSection>
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="140px"
          height="140px"
        />
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="140px"
          height="140px"
        />
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="140px"
          height="140px"
        />
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="140px"
          height="140px"
        />
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="140px"
          height="140px"
        />
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="140px"
          height="140px"
        />
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="140px"
          height="140px"
        />
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="140px"
          height="140px"
        />
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="140px"
          height="140px"
        />
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="140px"
          height="140px"
        />
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="140px"
          height="140px"
        />
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="140px"
          height="140px"
        />
      </SkeletonPodcastsWithOnlyAvatarListSection>
    </SkeletonPodcastsWithOnlyAvatarListContainer>
  </Container>
);

export default SkeletonPodcastsWithOnlyAvatarList;
