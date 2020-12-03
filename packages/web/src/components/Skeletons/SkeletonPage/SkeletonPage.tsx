import React from "react";
import { Skeleton } from "@chakra-ui/react";

import {
  SkeletonPageContainer,
  SkeletonPageHeader,
  SkeletonPageDetailsContainer,
  SkeletonPageButtonsContainer,
  SkeletonPageLinksContainer,
  SkeletonPageLinkContainer,
  SkeletonPageEpisodesContainer,
} from "./SkeletonPage.styles";

import SkeletonEpisode from "../SkeletonEpisode/SkeletonEpisode";

interface Props {
  episodes: boolean;
}

const SkeletonPage = ({ episodes }: Props) => (
  <SkeletonPageContainer>
    <SkeletonPageHeader>
      <Skeleton
        startColor="#E2E8F0"
        endColor="#E2E8F0"
        borderRadius={3}
        width="200px"
        height="200px"
      />

      <SkeletonPageDetailsContainer>
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
      </SkeletonPageDetailsContainer>

      <SkeletonPageButtonsContainer>
        <Skeleton
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
          width="100%"
          height="30px"
        />
      </SkeletonPageButtonsContainer>

      <SkeletonPageLinksContainer>
        <SkeletonPageLinkContainer>
          <Skeleton
            startColor="#E2E8F0"
            endColor="#E2E8F0"
            borderRadius={3}
            width="100px"
            height="30px"
          />
        </SkeletonPageLinkContainer>

        <SkeletonPageLinkContainer>
          <Skeleton
            startColor="#E2E8F0"
            endColor="#E2E8F0"
            borderRadius={3}
            width="100px"
            height="30px"
          />
        </SkeletonPageLinkContainer>
      </SkeletonPageLinksContainer>
    </SkeletonPageHeader>

    {episodes === true ? (
      <SkeletonPageEpisodesContainer>
        <SkeletonEpisode />
        <SkeletonEpisode />
        <SkeletonEpisode />
      </SkeletonPageEpisodesContainer>
    ) : null}
  </SkeletonPageContainer>
);

export default SkeletonPage;
