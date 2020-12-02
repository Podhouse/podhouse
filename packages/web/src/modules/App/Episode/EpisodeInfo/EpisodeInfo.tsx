import React from "react";
import { Heading, Button, Link, Image } from "@chakra-ui/react";
import { ExternalLink } from "react-feather";
import { GraphQLTaggedNode } from "relay-runtime";
import { usePreloadedQuery } from "react-relay/hooks";

import {
  EpisodeInfoContainer,
  EpisodeInfoHeader,
  EpisodeInfoDetailsContainer,
  EpisodeInfoDescription,
  EpisodeInfoButtonsContainer,
  EpisodeInfoLinksContainer,
  EpisodeInfoLinkContainer,
} from "./EpisodeInfo.styles";

import { EpisodeQuery } from "../__generated__/EpisodeQuery.graphql";

// TODO:
// Should improve the queryReference type to be a PreloadedQuery<EpisodeQuery>
interface Props {
  queryReference: any;
  query: GraphQLTaggedNode;
}

const EpisodeInfo = ({ queryReference, query }: Props) => {
  const { episode } = usePreloadedQuery<EpisodeQuery>(query, queryReference);

  return (
    <EpisodeInfoContainer>
      <EpisodeInfoHeader>
        <Image
          src={episode?.image}
          objectFit="cover"
          borderRadius={5}
          maxWidth="200px"
          alignSelf="center"
          justifySelf="center"
        />

        <EpisodeInfoDetailsContainer>
          <Heading as="h1" letterSpacing="-0.03em">
            {episode?.title}
          </Heading>

          <Heading as="h2" size="sm" letterSpacing="-0.03em">
            {episode?.podcast.name}
          </Heading>

          <EpisodeInfoDescription lineHeight="25px" textAlign="start">
            {episode?.description}
          </EpisodeInfoDescription>
        </EpisodeInfoDetailsContainer>

        <EpisodeInfoButtonsContainer>
          <Button
            type="button"
            width="100%"
            bgColor="#101010"
            color="#ffffff"
            _hover={{ bg: "#101010" }}
            _active={{
              bg: "#101010",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(0, 0, 0, .50), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            _disabled={{
              bgColor: "#eaeaea",
              cursor: "not-allowed",
            }}
          >
            Subscribe
          </Button>
        </EpisodeInfoButtonsContainer>

        <EpisodeInfoLinksContainer>
          <EpisodeInfoLinkContainer>
            <Link href={episode?.podcast?.website} isExternal>
              Website
            </Link>
            <ExternalLink size={14} />
          </EpisodeInfoLinkContainer>

          <EpisodeInfoLinkContainer>
            <Link href={episode?.podcast?.rss} isExternal>
              RSS
            </Link>
            <ExternalLink size={14} />
          </EpisodeInfoLinkContainer>
        </EpisodeInfoLinksContainer>
      </EpisodeInfoHeader>
    </EpisodeInfoContainer>
  );
};

export default EpisodeInfo;
