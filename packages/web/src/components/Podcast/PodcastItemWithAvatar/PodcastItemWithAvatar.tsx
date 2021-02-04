import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  PodcastItemWithAvatarContainer,
  PodcastItemWithAvatarAvatar,
} from "./PodcastItemWithAvatar.styles";

import convertPodcastNameToURL from "src/utils/convertPodcastNameToURL";

interface Props {
  readonly node: {
    readonly id: string;
    readonly _id: string;
    readonly name: string;
    readonly appleId: number;
    readonly image: string;
  };
}

const PodcastItemWithAvatar = ({ node }: Props) => {
  const route: string = convertPodcastNameToURL(node.name, node.appleId);

  return (
    <PodcastItemWithAvatarContainer>
      <ReactRouterLink to={{ pathname: route, state: { _id: node._id } }}>
        <PodcastItemWithAvatarAvatar src={node.image} alt="image" loading="lazy" />
      </ReactRouterLink>
    </PodcastItemWithAvatarContainer>
  );
};

export default PodcastItemWithAvatar;
