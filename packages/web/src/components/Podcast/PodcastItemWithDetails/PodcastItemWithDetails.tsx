import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import {
  PodcastItemWithDetailsContainer,
  PodcastItemWithDetailsAvatar,
  PodcastItemInnerContainer,
} from "./PodcastItemWithDetails.styles";

import convertPodcastNameToURL from "src/utils/convertPodcastNameToURL";

interface Props {
  readonly node: {
    readonly id: string;
    readonly _id: string;
    readonly name: string;
    readonly author: string;
    readonly image: string;
    readonly appleId: number;
  };
}

const PodcastItemWithDetails = ({ node }: Props) => {
  const route: string = convertPodcastNameToURL(node.name, node.appleId);

  return (
    <PodcastItemWithDetailsContainer>
      <ReactRouterLink to={{ pathname: route, state: { _id: node._id } }}>
        <PodcastItemWithDetailsAvatar
          src={node.image}
          alt="image"
          loading="lazy"
        />
      </ReactRouterLink>

      <PodcastItemInnerContainer>
        <Text
          as={ReactRouterLink}
          to={{ pathname: route, state: { _id: node._id } }}
          fontWeight="500"
        >
          {node.name}
        </Text>

        <Text textAlign="start">{node.author}</Text>
      </PodcastItemInnerContainer>
    </PodcastItemWithDetailsContainer>
  );
};

export default PodcastItemWithDetails;
