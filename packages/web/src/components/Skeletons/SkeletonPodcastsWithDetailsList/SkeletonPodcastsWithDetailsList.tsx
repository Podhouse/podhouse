import React from "react";
import { Skeleton, Divider } from "@chakra-ui/react";

import {
  SkeletonPodcastsWithDetailsListContainer,
  SkeletonPodcastsWithDetailsListSection,
  SkeletonPodcastsWithDetailsListHeader,
} from "./SkeletonPodcastsWithDetailsList.styles";

import SkeletonPodcastItemWithDetails from "../SkeletonPodcastItemWithDetails/SkeletonPodcastItemWithDetails";

const SkeletonPodcastsWithDetailsList = () => (
  <SkeletonPodcastsWithDetailsListContainer>
    <SkeletonPodcastsWithDetailsListHeader>
      <Skeleton
        startColor="#E2E8F0"
        endColor="#E2E8F0"
        borderRadius={3}
        width="120px"
        height="30px"
      />
      <Divider orientation="horizontal" />
    </SkeletonPodcastsWithDetailsListHeader>

    <SkeletonPodcastsWithDetailsListSection>
      <SkeletonPodcastItemWithDetails />
      <SkeletonPodcastItemWithDetails />
      <SkeletonPodcastItemWithDetails />
      <SkeletonPodcastItemWithDetails />
      <SkeletonPodcastItemWithDetails />
      <SkeletonPodcastItemWithDetails />
      <SkeletonPodcastItemWithDetails />
      <SkeletonPodcastItemWithDetails />
      <SkeletonPodcastItemWithDetails />
    </SkeletonPodcastsWithDetailsListSection>
  </SkeletonPodcastsWithDetailsListContainer>
);

export default SkeletonPodcastsWithDetailsList;
