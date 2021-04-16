import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import {
  PodcastItemWithDetailsContainer,
  PodcastItemWithDetailsAvatar,
  PodcastItemInnerContainer,
} from "./PodcastItemWithDetails.styles";

const PodcastItemWithDetails = () => {
  return (
    <PodcastItemWithDetailsContainer>
      <ReactRouterLink to="/">
        <PodcastItemWithDetailsAvatar
          src="https://bit.ly/sage-adebayo"
          alt="image"
          loading="lazy"
        />
      </ReactRouterLink>

      <PodcastItemInnerContainer>
        <Text as={ReactRouterLink} to="/" fontWeight="500">
          Podcast
        </Text>

        <Text textAlign="start">Podcast</Text>
      </PodcastItemInnerContainer>
    </PodcastItemWithDetailsContainer>
  );
};

export default PodcastItemWithDetails;
