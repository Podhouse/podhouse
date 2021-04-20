import React from "react";
import { Skeleton, Divider } from "@chakra-ui/react";

import {
  Container,
  ListSection,
  ListHeader,
} from "./SkeletonPodcastsWithDetailsList.styles";

import SkeletonPodcastItemWithDetails from "../SkeletonPodcastItemWithDetails/SkeletonPodcastItemWithDetails";

const SkeletonPodcastsWithDetailsList = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Container>
      <ListHeader>
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="120px"
          height="30px"
        />
        <Divider orientation="horizontal" />
      </ListHeader>

      <ListSection>
        {array.map((item) => (
          <SkeletonPodcastItemWithDetails key={item} />
        ))}
      </ListSection>
    </Container>
  );
};

export default SkeletonPodcastsWithDetailsList;
