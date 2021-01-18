import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import {
  PodcastItemWithDetailsContainer,
  PodcastItemWithDetailsAvatar,
  PodcastItemInnerContainer,
} from "./PodcastItemWithDetails.styles";

import { PodcastItemWithDetailsProps } from "./PodcastItemWithDetails.types";

import convertPodcastNameToURL from "src/utils/convertPodcastNameToURL";

const PodcastItemWithDetails = ({ node }: PodcastItemWithDetailsProps) => {
  const { _id, name, author, appleId, image } = node;

  const route: string = convertPodcastNameToURL(name, appleId);

  return (
    <PodcastItemWithDetailsContainer>
      <ReactRouterLink to={{ pathname: route, state: { _id } }}>
        <PodcastItemWithDetailsAvatar src={image} alt="image" loading="lazy" />
      </ReactRouterLink>

      <PodcastItemInnerContainer>
        <Text
          as={ReactRouterLink}
          to={{ pathname: `/podcast/${_id}`, state: { _id } }}
          fontWeight="500"
        >
          {name}
        </Text>

        <Text textAlign="start">{author}</Text>
      </PodcastItemInnerContainer>
    </PodcastItemWithDetailsContainer>
  );
};

export default PodcastItemWithDetails;
