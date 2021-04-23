import React from "react";
import { Skeleton } from "@chakra-ui/react";

import {
  SkeletonPodcastPageContainer,
  SkeletonPodcastPageHeader,
  SkeletonPodcastPageDetailsContainer,
  SkeletonPodcastPageButtonsContainer,
  SkeletonPodcastPageLinksContainer,
  SkeletonPodcastPageLinkContainer,
  SkeletonPodcastPageEpisodesContainer,
} from "./SkeletonPodcastPage.styles";

import SkeletonEpisode from "../SkeletonEpisode/SkeletonEpisode";

const SkeletonPodcastPage = () => (
  <SkeletonPodcastPageContainer>
    <SkeletonPodcastPageHeader>
      <Skeleton
        startColor="#E2E8F0"
        endColor="#E2E8F0"
        borderRadius={3}
        width="200px"
        height="200px"
        justifySelf="center"
      />

      <SkeletonPodcastPageDetailsContainer>
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="100%"
          height="30px"
        />

        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="100%"
          height="30px"
        />

        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="100%"
          height="80px"
        />
      </SkeletonPodcastPageDetailsContainer>

      <SkeletonPodcastPageButtonsContainer>
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="100%"
          height="30px"
        />
      </SkeletonPodcastPageButtonsContainer>

      <SkeletonPodcastPageLinksContainer>
        <SkeletonPodcastPageLinkContainer>
          <Skeleton
            startColor="#E2E8F0"
            endColor="#E2E8F0"
            borderRadius={3}
            width="100px"
            height="30px"
          />
        </SkeletonPodcastPageLinkContainer>

        <SkeletonPodcastPageLinkContainer>
          <Skeleton
            startColor="#E2E8F0"
            endColor="#E2E8F0"
            borderRadius={3}
            width="100px"
            height="30px"
          />
        </SkeletonPodcastPageLinkContainer>
      </SkeletonPodcastPageLinksContainer>
    </SkeletonPodcastPageHeader>

    <SkeletonPodcastPageEpisodesContainer>
      <SkeletonEpisode />
      <SkeletonEpisode />
      <SkeletonEpisode />
    </SkeletonPodcastPageEpisodesContainer>
  </SkeletonPodcastPageContainer>
);

export default SkeletonPodcastPage;
