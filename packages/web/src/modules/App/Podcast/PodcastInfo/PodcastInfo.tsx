import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Link, Image, useToast } from "@chakra-ui/react";
import { ExternalLink } from "react-feather";
import { GraphQLTaggedNode } from "react-relay";
import {
  usePreloadedQuery,
  useMutation,
  PreloadedQuery,
} from "react-relay/hooks";
import { useLocation } from "react-router-dom";

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

import {
  PodcastUserSubscribeToPodcast,
  PodcastUserUnsubscribeToPodcast,
} from "./PodcastUser";

import { PodcastUserSubscribeToPodcastMutation } from "./__generated__/PodcastUserSubscribeToPodcastMutation.graphql";
import { PodcastUserUnsubscribeToPodcastMutation } from "./__generated__/PodcastUserUnsubscribeToPodcastMutation.graphql";
import { PodcastQuery } from "../__generated__/PodcastQuery.graphql";
import { PodcastInfoUserQuery } from "../__generated__/PodcastInfoUserQuery.graphql";

interface Props {
  podcastQueryReference: PreloadedQuery<PodcastQuery>;
  podcastQuery: GraphQLTaggedNode;
  userQueryReference: PreloadedQuery<PodcastInfoUserQuery> | null | undefined;
  userQuery: GraphQLTaggedNode;
  shouldLoadMore: boolean;
}

const PodcastInfo = ({
  podcastQueryReference,
  podcastQuery,
  userQueryReference,
  userQuery,
  shouldLoadMore,
}: Props) => {
  const location = useLocation();

  const toast = useToast();

  const podcastResponse = usePreloadedQuery<PodcastQuery>(
    podcastQuery,
    podcastQueryReference
  );
  const currentUserResponse = usePreloadedQuery<PodcastInfoUserQuery>(
    userQuery,
    userQueryReference as PreloadedQuery<PodcastInfoUserQuery>
  );

  const [
    userSubscribeToPodcast,
    isSubscribeToPodcastPending,
  ] = useMutation<PodcastUserSubscribeToPodcastMutation>(
    PodcastUserSubscribeToPodcast
  );

  const [
    userUnsubscribeToPodcast,
    isUnsubscribeToPodcastPending,
  ] = useMutation<PodcastUserUnsubscribeToPodcastMutation>(
    PodcastUserUnsubscribeToPodcast
  );

  const onSubscribeOrUnsubscribeToPodcast = () => {
    if (!currentUserResponse.currentUser) {
      return;
    } else {
      if (currentUserResponse.currentUser.subscribed === true) {
        userUnsubscribeToPodcast({
          variables: {
            input: {
              _id: podcastResponse.podcast?._id as string,
            },
            unsubscribedInput: {
              _id: podcastResponse.podcast?._id as string,
            },
          },
          onCompleted: () => {
            toast({
              title: "Unsubscribed successfully",
              description: "You've unsubscribed to this podcast",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          },
        });
      } else {
        userSubscribeToPodcast({
          variables: {
            input: {
              _id: podcastResponse.podcast?._id as string,
            },
            subscribedInput: {
              _id: podcastResponse.podcast?._id as string,
            },
          },
          onCompleted: () => {
            toast({
              title: "Subscribed successfully",
              description: "You've subscribed to this podcast",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          },
        });
      }
    }
  };

  return (
    <PodcastInfoContainer>
      <Helmet>
        <title>{podcastResponse.podcast?.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={podcastResponse.podcast?.description}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={podcastResponse.podcast?.name}
        />
        <meta
          property="twitter:description"
          content={podcastResponse.podcast?.description}
        />
        <meta
          property="twitter:image"
          content={podcastResponse.podcast?.image}
        />
        <meta property="twitter:url" content={location.pathname} />

        {/* Open Graph */}
        <meta property="og:url" content={location.pathname} key="ogurl" />
        <meta
          property="og:image"
          content={podcastResponse.podcast?.image}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={podcastResponse.podcast?.name}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={podcastResponse.podcast?.name}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={podcastResponse.podcast?.description}
          key="ogdesc"
        />
      </Helmet>
      <PodcastInfoHeader>
        <Image
          src={podcastResponse.podcast?.image}
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
            {podcastResponse.podcast?.name}
          </Heading>

          <Heading
            color="#101010"
            as="h2"
            size="sm"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            {podcastResponse.podcast?.author}
          </Heading>

          <PodcastInfoDescription
            color="#101010"
            lineHeight="25px"
            textAlign="start"
          >
            {podcastResponse.podcast?.description}
          </PodcastInfoDescription>
        </PodcastInfoDetailsContainer>

        <PodcastInfoButtonsContainer>
          <Button
            type="button"
            onClick={onSubscribeOrUnsubscribeToPodcast}
            isLoading={
              isSubscribeToPodcastPending || isUnsubscribeToPodcastPending
            }
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
            {currentUserResponse.currentUser &&
            currentUserResponse.currentUser.subscribed === true
              ? "Unsubscribe"
              : "Subscribe"}
          </Button>
        </PodcastInfoButtonsContainer>

        <PodcastInfoLinksContainer>
          <PodcastInfoLinkContainer>
            <Link
              color="#101010"
              href={podcastResponse.podcast?.website}
              isExternal
            >
              Website
            </Link>
            <ExternalLink size={14} />
          </PodcastInfoLinkContainer>

          <PodcastInfoLinkContainer>
            <Link
              color="#101010"
              href={podcastResponse.podcast?.rss}
              isExternal
            >
              RSS
            </Link>
            <ExternalLink size={14} />
          </PodcastInfoLinkContainer>
        </PodcastInfoLinksContainer>
      </PodcastInfoHeader>

      {/* <PodcastEpisodes query={podcastResponse} shouldLoadMore={shouldLoadMore} /> */}
    </PodcastInfoContainer>
  );
};

export default PodcastInfo;
