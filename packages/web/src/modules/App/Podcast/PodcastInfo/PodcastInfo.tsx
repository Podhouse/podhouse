import React from "react";
import { Heading, Button, Link, Image, useToast } from "@chakra-ui/react";
import { ExternalLink } from "react-feather";
import { GraphQLTaggedNode } from "relay-runtime";
import {
  usePreloadedQuery,
  useMutation,
  PreloadedQuery,
} from "react-relay/hooks";

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
  userQueryReference: any;
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
  const toast = useToast();

  const { podcast } = usePreloadedQuery<PodcastQuery>(
    podcastQuery,
    podcastQueryReference
  );

  const { currentUser } = usePreloadedQuery<PodcastInfoUserQuery>(
    userQuery,
    userQueryReference
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
    if (!currentUser) {
      return;
    } else {
      if (currentUser.subscribed === true) {
        userUnsubscribeToPodcast({
          variables: {
            input: {
              _id: podcast?._id as string,
            },
            unsubscribedInput: {
              _id: podcast?._id as string,
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
              _id: podcast?._id as string,
            },
            subscribedInput: {
              _id: podcast?._id as string,
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

  console.log("podcast: ", podcast);

  return (
    <PodcastInfoContainer>
      <PodcastInfoHeader>
        <Image
          src={podcast && podcast.image ? podcast.image : ""}
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
            {podcast && podcast.name ? podcast.name : ""}
          </Heading>

          <Heading
            color="#101010"
            as="h2"
            size="sm"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            {podcast && podcast.author ? podcast.author : ""}
          </Heading>

          <PodcastInfoDescription
            color="#101010"
            lineHeight="25px"
            textAlign="start"
          >
            {podcast && podcast.description ? podcast.description : ""}
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
            {currentUser && currentUser.subscribed === true
              ? "Unsubscribe"
              : "Subscribe"}
          </Button>
        </PodcastInfoButtonsContainer>

        <PodcastInfoLinksContainer>
          <PodcastInfoLinkContainer>
            <Link
              color="#101010"
              href={podcast && podcast.website ? podcast.website : ""}
              isExternal
            >
              Website
            </Link>
            <ExternalLink size={14} />
          </PodcastInfoLinkContainer>

          <PodcastInfoLinkContainer>
            <Link
              color="#101010"
              href={podcast && podcast.rss ? podcast.rss : ""}
              isExternal
            >
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
