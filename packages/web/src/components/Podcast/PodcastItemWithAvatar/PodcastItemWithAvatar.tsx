import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  PodcastItemWithAvatarContainer,
  PodcastItemWithAvatarAvatar,
} from "./PodcastItemWithAvatar.styles";

import { PodcastItemWithAvatarProps } from "./PodcastItemWithAvatar.types";

const PodcastItemWithAvatar = ({ node }: PodcastItemWithAvatarProps) => {
  const { _id, image } = node;

  return (
    <PodcastItemWithAvatarContainer>
      <ReactRouterLink to={{ pathname: `/podcast/${_id}`, state: { _id } }}>
        <PodcastItemWithAvatarAvatar src={image} alt="image" loading="lazy" />
      </ReactRouterLink>
    </PodcastItemWithAvatarContainer>
  );
};

export default PodcastItemWithAvatar;
