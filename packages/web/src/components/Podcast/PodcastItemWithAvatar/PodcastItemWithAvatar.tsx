import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  PodcastItemWithAvatarContainer,
  PodcastItemWithAvatarAvatar,
} from "./PodcastItemWithAvatar.styles";

const PodcastItemWithAvatar = () => {
  return (
    <PodcastItemWithAvatarContainer>
      <ReactRouterLink to="/">
        <PodcastItemWithAvatarAvatar
          src="https://bit.ly/sage-adebayo"
          alt="image"
          loading="lazy"
        />
      </ReactRouterLink>
    </PodcastItemWithAvatarContainer>
  );
};

export default PodcastItemWithAvatar;
