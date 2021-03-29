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

  return (
    <PodcastInfoContainer>
      <PodcastInfoHeader>
        <Image
          src={podcast && podcast.image ? podcast.image : ""}
          objectFit="cover"
          borderRadius={5}
          maxWidth="200px"
          loading="lazy"
        />

        <PodcastInfoDetailsContainer>
          <Heading
            as="h1"
            fontWeight="700"
            fontSize="36px"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            {podcast && podcast.name ? podcast.name : ""}
          </Heading>

          <Heading
            as="h2"
            fontSize="16px"
            fontWeight="500"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            {podcast && podcast.author ? podcast.author : ""}
          </Heading>

          <PodcastInfoDescription
            text={podcast && podcast.description ? podcast.description : ""}
            id="podcast-info-description"
            lines={3}
            ellipsis="..."
            moreText="Read more"
            className="custom-class"
            innerElement="p"
          />
        </PodcastInfoDetailsContainer>

        <PodcastInfoButtonsContainer>
          <Button
            type="button"
            width="100%"
            isLoading={
              isSubscribeToPodcastPending || isUnsubscribeToPodcastPending
            }
            onClick={onSubscribeOrUnsubscribeToPodcast}
          >
            {currentUser && currentUser.subscribed === true
              ? "Unsubscribe"
              : "Subscribe"}
          </Button>
        </PodcastInfoButtonsContainer>

        <PodcastInfoLinksContainer>
          <PodcastInfoLinkContainer>
            <Link
              href={podcast && podcast.website ? podcast.website : ""}
              isExternal
            >
              Website
            </Link>
            <ExternalLink size={14} />
          </PodcastInfoLinkContainer>

          <PodcastInfoLinkContainer>
            <Link href={podcast && podcast.rss ? podcast.rss : ""} isExternal>
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
