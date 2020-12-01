import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import {
  PodcastItemWithDetailsContainer,
  PodcastItemWithDetailsAvatar,
  PodcastItemInnerContainer,
} from "./PodcastItemWithDetails.styles";

import { PodcastItemWithDetailsProps } from "./PodcastItemWithDetails.types";

const PodcastItemWithDetails = ({ node }: PodcastItemWithDetailsProps) => {
  const { _id, name, author, image } = node;

  const imageAlt = `image`;

  return (
    <PodcastItemWithDetailsContainer>
      <ReactRouterLink to={`/podcast/${_id}`}>
        <PodcastItemWithDetailsAvatar src={image} alt={imageAlt} />
      </ReactRouterLink>

      <PodcastItemInnerContainer>
        <Text as={ReactRouterLink} to={`/podcast/${_id}`} fontWeight="500">
          {name}
        </Text>

        <Text textAlign="start">{author}</Text>
      </PodcastItemInnerContainer>
    </PodcastItemWithDetailsContainer>
  );
};

export default PodcastItemWithDetails;
