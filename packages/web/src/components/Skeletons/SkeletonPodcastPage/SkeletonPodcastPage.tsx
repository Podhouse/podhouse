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
      <Skeleton width="200px" height="200px" justifySelf="center" />

      <SkeletonPodcastPageDetailsContainer>
        <Skeleton width="100%" height="30px" />

        <Skeleton width="100%" height="30px" />

        <Skeleton width="100%" height="80px" />
      </SkeletonPodcastPageDetailsContainer>

      <SkeletonPodcastPageButtonsContainer>
        <Skeleton width="100%" height="30px" />
      </SkeletonPodcastPageButtonsContainer>

      <SkeletonPodcastPageLinksContainer>
        <SkeletonPodcastPageLinkContainer>
          <Skeleton width="100px" height="30px" />
        </SkeletonPodcastPageLinkContainer>

        <SkeletonPodcastPageLinkContainer>
          <Skeleton width="100px" height="30px" />
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
