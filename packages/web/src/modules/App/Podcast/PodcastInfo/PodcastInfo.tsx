import React from "react";
import { Heading, Button, Link, Image } from "@chakra-ui/react";
import { ExternalLink } from "react-feather";
import { GraphQLTaggedNode } from "relay-runtime";
import { usePreloadedQuery } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";

import {
  PodcastInfoContainer,
  PodcastInfoHeader,
  PodcastInfoDetailsContainer,
  PodcastInfoDescription,
  PodcastInfoButtonsContainer,
  PodcastInfoLinksContainer,
  PodcastInfoLinkContainer,
} from "./PodcastInfo.styles";

import PodcastEpisodes from "./PodcastEpisodes/PodcastEpisodes";

import { PodcastQuery } from "../__generated__/PodcastQuery.graphql";

import useAuthUser from "src/hooks/useAuthUser";

import { getToken } from "src/utils/auth";

import { PodcastInfoQuery } from "./__generated__/PodcastInfoQuery.graphql";

const query = graphql`
  query PodcastInfoQuery {
    currentUser {
      ...useAuthUser_user
    }
  }
`;

// TODO:
// Should improve the queryReference type to be a PreloadedQuery<PodcastQuery>
interface Props {
  queryReference: any;
  query: GraphQLTaggedNode;
  shouldLoadMore: boolean;
}

const PodcastInfo = ({ queryReference, query, shouldLoadMore }: Props) => {
  const { podcast } = usePreloadedQuery<PodcastQuery>(query, queryReference);

  const data = useLazyLoadQuery<PodcastInfoQuery>(
    query,
    {},
    {
      fetchPolicy: "store-and-network",
      fetchKey: getToken(),
    }
  );

  const isAuthenticated = useAuthUser(data?.currentUser);

  if (!isAuthenticated) {
    console.log("not: ", isAuthenticated);
  } else {
    console.log("true: ", isAuthenticated);
  }

  return (
    <PodcastInfoContainer>
      <PodcastInfoHeader>
        <Image
          src={podcast?.image}
          objectFit="cover"
          borderRadius={5}
          maxWidth="200px"
          alignSelf="center"
          justifySelf="center"
        />

        <PodcastInfoDetailsContainer>
          <Heading
            color="#101010"
            as="h1"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            {podcast?.name}
          </Heading>

          <Heading
            color="#101010"
            as="h2"
            size="sm"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            {podcast?.author}
          </Heading>

          <PodcastInfoDescription
            color="#101010"
            lineHeight="25px"
            textAlign="start"
          >
            {podcast?.description}
          </PodcastInfoDescription>
        </PodcastInfoDetailsContainer>

        <PodcastInfoButtonsContainer>
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
        </PodcastInfoButtonsContainer>

        <PodcastInfoLinksContainer>
          <PodcastInfoLinkContainer>
            <Link color="#101010" href={podcast?.website} isExternal>
              Website
            </Link>
            <ExternalLink size={14} />
          </PodcastInfoLinkContainer>

          <PodcastInfoLinkContainer>
            <Link color="#101010" href={podcast?.rss} isExternal>
              RSS
            </Link>
            <ExternalLink size={14} />
          </PodcastInfoLinkContainer>
        </PodcastInfoLinksContainer>
      </PodcastInfoHeader>

      <PodcastEpisodes podcast={podcast} shouldLoadMore={shouldLoadMore} />
    </PodcastInfoContainer>
  );
};

export default PodcastInfo;
