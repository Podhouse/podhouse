import React from "react";
import Head from "next/head";
import router from "next/router";
import Scrollbars from "react-custom-scrollbars";
import { fetchQuery } from "relay-runtime";
import { useQuery, graphql, STORE_OR_NETWORK } from "relay-hooks";
import Skeleton from "react-loading-skeleton";

import {
  PodcastContainer,
  PodcastHeader,
  PodcastAvatar,
  PodcastDetailsContainer,
  PodcastDescription,
  PodcastButtonsContainer,
  PodcastEpisodesContainer,
  PodcastLinksContainer,
  PodcastLinkContainer,
} from "./Podcast.styles";

import { RelayEnvironment } from "src/relay/RelayEnvironment";

import EpisodeItem from "src/components/Podcast/EpisodeItem/EpisodeItem";

import Button from "src/system/Button/Button";
import Heading from "src/system/Heading/Heading";
import Link from "src/system/Link/Link";

import { PodcastQuery } from "./__generated__/PodcastQuery.graphql";

const query = graphql`
  query PodcastQuery(
    $_id: ID!
    $after: String
    $first: Int!
    $before: String
    $last: Int!
  ) {
    podcast(_id: $_id) {
      id
      _id
      appleId
      name
      author
      description
      website
      rss
      image
      episodes(after: $after, first: $first, before: $before, last: $last) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            _id
            title
            description
            publishedDate
            link
            image
            audio
            duration
          }
          cursor
        }
      }
      genres
      genreIds
    }
  }
`;

const Podcast = () => {
  const podcastId: string = router.query._id as string;

  const { props, error } = useQuery<PodcastQuery>(
    query,
    {
      _id: podcastId,
      first: 10,
      last: 10,
    },
    {
      fetchPolicy: STORE_OR_NETWORK,
    },
  );

  if (error) {
    console.log("error: ", error);
  }

  return (
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <Head>
        <title>99% Invisible</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PodcastContainer>
        <PodcastHeader>
          {props === null || props === undefined ? (
            <Skeleton width={200} height={200} />
          ) : (
            <PodcastAvatar src={props.podcast.image} />
          )}

          <PodcastDetailsContainer>
            {props === null || props === undefined ? (
              <Skeleton width={300} height={30} />
            ) : (
              <Heading as="h1" variant="primary" size="normal">
                {props.podcast.name}
              </Heading>
            )}

            {props === null || props === undefined ? (
              <Skeleton width={300} height={20} />
            ) : (
              <Heading as="h2" variant="primary" size="small" fontSize={16}>
                {props.podcast.author}
              </Heading>
            )}

            {props === null || props === undefined ? (
              <Skeleton width={300} height={100} />
            ) : (
              <PodcastDescription
                variant="secondary"
                size="normal"
                textAlign="start"
              >
                {props.podcast.description}
              </PodcastDescription>
            )}
          </PodcastDetailsContainer>

          <PodcastButtonsContainer>
            <Button type="button" variant="primary" size="normal">
              Subscribe
            </Button>
          </PodcastButtonsContainer>

          <PodcastLinksContainer>
            <PodcastLinkContainer>
              <Link
                variant="secondary"
                size="normal"
                href={
                  props === null || props === undefined
                    ? ""
                    : props.podcast.website
                }
                target="_blank"
                rel="noopener"
              >
                Website
              </Link>
            </PodcastLinkContainer>

            <PodcastLinkContainer>
              <Link
                variant="secondary"
                size="normal"
                href={
                  props === null || props === undefined ? "" : props.podcast.rss
                }
                target="_blank"
                rel="noopener"
              >
                RSS
              </Link>
            </PodcastLinkContainer>
          </PodcastLinksContainer>
        </PodcastHeader>

        <PodcastEpisodesContainer>
          {props === null || props === undefined ? (
            <>
              <EpisodeItem episode={null} loading={true} />
              <EpisodeItem episode={null} loading={true} />
              <EpisodeItem episode={null} loading={true} />
              <EpisodeItem episode={null} loading={true} />
              <EpisodeItem episode={null} loading={true} />
            </>
          ) : (
            props.podcast.episodes.edges.map(({ node }) => (
              <EpisodeItem key={node.id} episode={node} loading={false} />
            ))
          )}
        </PodcastEpisodesContainer>
      </PodcastContainer>
    </Scrollbars>
  );
};

Podcast.getStaticProps = async () => {
  const environment = RelayEnvironment();
  const queryProps = await fetchQuery(environment, query, {
    first: 9,
  });
  const initialRecords = environment.getStore().getSource().toJSON();

  return {
    props: {
      queryProps,
      initialRecords,
    },
  };
};

export default Podcast;
