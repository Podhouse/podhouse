import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import {
  PodcastItemWithDetailsContainer,
  PodcastItemWithDetailsAvatar,
  PodcastItemInnerContainer,
} from "./PodcastItemWithDetails.styles";

import { PodcastItemWithDetailsProps } from "./PodcastItemWithDetails.types";

const PodcastItemWithDetails = ({ podcast }: PodcastItemWithDetailsProps) => {
  const { name, author, image } = podcast;

  const imageAlt = `image`;

  return (
    <PodcastItemWithDetailsContainer>
      <ReactRouterLink to="/podcast/123">
        <PodcastItemWithDetailsAvatar src={image} alt={imageAlt} />
      </ReactRouterLink>

      <PodcastItemInnerContainer>
        <Text as={ReactRouterLink} to="/podcast/123" fontWeight="500">
          {name}
        </Text>

        <Text textAlign="start">{author}</Text>
      </PodcastItemInnerContainer>
    </PodcastItemWithDetailsContainer>
  );
};

export default PodcastItemWithDetails;
