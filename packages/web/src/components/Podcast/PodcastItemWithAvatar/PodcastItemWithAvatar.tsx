import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  PodcastItemWithAvatarContainer,
  PodcastItemWithAvatarAvatar,
} from "./PodcastItemWithAvatar.styles";

import { PodcastItemWithAvatarProps } from "./PodcastItemWithAvatar.types";

import convertPodcastNameToURL from "src/utils/convertPodcastNameToURL";

const PodcastItemWithAvatar = ({ node }: PodcastItemWithAvatarProps) => {
  const { _id, name, appleId, image } = node;

  const route: string = convertPodcastNameToURL(name, appleId);

  return (
    <PodcastItemWithAvatarContainer>
      <ReactRouterLink to={{ pathname: route, state: { _id } }}>
        <PodcastItemWithAvatarAvatar src={image} alt="image" loading="lazy" />
      </ReactRouterLink>
    </PodcastItemWithAvatarContainer>
  );
};

export default PodcastItemWithAvatar;
