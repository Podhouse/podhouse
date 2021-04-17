import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  PodcastItemWithAvatarContainer,
  PodcastItemWithAvatarAvatar,
} from "./PodcastItemWithAvatar.styles";

interface Props {
  id: number;
  image: string;
}

const PodcastItemWithAvatar = ({ id, image }: Props) => {
  return (
    <PodcastItemWithAvatarContainer>
      <ReactRouterLink to={{ pathname: `/podcast/${id}`, state: { id } }}>
        <PodcastItemWithAvatarAvatar src={image} alt="image" loading="lazy" />
      </ReactRouterLink>
    </PodcastItemWithAvatarContainer>
  );
};

export default PodcastItemWithAvatar;
