import React from "react";
import { Divider, Skeleton } from "@chakra-ui/react";

import {
  Container,
  ListContainer,
  ListHeader,
  ListSection,
} from "./SkeletonPodcastsWithOnlyAvatarList.styles";

const SkeletonPodcastsWithOnlyAvatarList = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Container>
      <ListContainer>
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
            <Skeleton
              key={item}
              startColor="#E2E8F0"
              endColor="#E2E8F0"
              borderRadius={3}
              width="140px"
              height="140px"
            />
          ))}
        </ListSection>
      </ListContainer>
    </Container>
  );
};

export default SkeletonPodcastsWithOnlyAvatarList;
