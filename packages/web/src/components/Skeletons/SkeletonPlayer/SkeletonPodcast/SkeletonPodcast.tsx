import React from "react";
import { Skeleton } from "@chakra-ui/react";

import {
  SkeletonPodcastContainer,
  SkeletonPodcastAvatar,
  SkeletonPodcastDetails,
  SkeletonPodcastNameTitle,
  SkeletonPodcastFavoriteContainer,
} from "./SkeletonPodcast.styles";

const SkeletonPodcast = () => (
  <SkeletonPodcastContainer>
    <SkeletonPodcastAvatar>
      <Skeleton width="40px" height="40px" />
    </SkeletonPodcastAvatar>

    <SkeletonPodcastDetails>
      <SkeletonPodcastNameTitle>
        <Skeleton width="100%" height="20px" />
      </SkeletonPodcastNameTitle>

      <SkeletonPodcastNameTitle>
        <Skeleton width="100%" height="20px" />
      </SkeletonPodcastNameTitle>

      <SkeletonPodcastFavoriteContainer>
        {/* <Heart
          className="like-button"
          size={16}
          strokeWidth={1.7}
          color="#101010"
          style={iconStyle}
          onClick={() => {}}
        /> */}
      </SkeletonPodcastFavoriteContainer>
    </SkeletonPodcastDetails>
  </SkeletonPodcastContainer>
);

export default SkeletonPodcast;
