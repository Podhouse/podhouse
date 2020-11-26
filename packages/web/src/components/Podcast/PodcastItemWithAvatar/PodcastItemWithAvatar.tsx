import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  PodcastItemWithAvatarContainer,
  PodcastItemWithAvatarAvatar,
} from "./PodcastItemWithAvatar.styles";

import { PodcastItemWithAvatarProps } from "./PodcastItemWithAvatar.types";

const PodcastItemWithAvatar = ({ podcast }: PodcastItemWithAvatarProps) => {
  const { name, avatar } = podcast;

  const imageAlt = `${name} avatar`;

  return (
    <PodcastItemWithAvatarContainer>
      <ReactRouterLink to="/podcast/123">
        <PodcastItemWithAvatarAvatar src={avatar} alt={imageAlt} />
      </ReactRouterLink>
    </PodcastItemWithAvatarContainer>
  );
};

export default PodcastItemWithAvatar;
