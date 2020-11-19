import React from "react";
import NextLink from "next/link";
import router from "next/router";
import Scrollbars from "react-custom-scrollbars";
import { fetchQuery } from "relay-runtime";
import { useQuery, graphql, STORE_OR_NETWORK } from "relay-hooks";
import Skeleton from "react-loading-skeleton";

import {
  EpisodeContainer,
  EpisodeHeader,
  EpisodeAvatar,
  EpisodeDetailsContainer,
  EpisodeDescription,
  EpisodeListenButtonContainer,
} from "./Episode.styles";

import { RelayEnvironment } from "src/relay/RelayEnvironment";

import Button from "src/system/Button/Button";
import Link from "src/system/Link/Link";
import Heading from "src/system/Heading/Heading";

import { EpisodeQuery } from "./__generated__/EpisodeQuery.graphql";

const query = graphql`
  query EpisodeQuery($_id: ID!) {
    episode(_id: $_id) {
      id
      _id
      title
      description
      publishedDate
      link
      image
      audio
      duration
      podcast {
        _id
        name
      }
    }
  }
`;

const Episode = () => {
  const episodeId: string = router.query._id as string;

  const { props, error } = useQuery<EpisodeQuery>(
    query,
    {
      _id: episodeId,
    },
    {
      fetchPolicy: STORE_OR_NETWORK,
    },
  );

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <EpisodeContainer>
        <EpisodeHeader>
          {props === null || props === undefined ? (
            <Skeleton width={200} height={200} />
          ) : (
            <EpisodeAvatar src={props.episode.image} />
          )}

          <EpisodeDetailsContainer>
            {props === null || props === undefined ? (
              <Skeleton width={300} height={30} />
            ) : (
              <Heading as="h1" variant="primary" size="normal">
                {props.episode.title}
              </Heading>
            )}

            {props === null || props === undefined ? (
              <Skeleton width={300} height={20} />
            ) : (
              <NextLink
                href={{
                  pathname: `/app/podcast/${props.episode.podcast._id}`,
                  query: { _id: props.episode.podcast._id },
                }}
              >
                <Link variant="secondary" size="normal">
                  {props.episode.podcast.name}
                </Link>
              </NextLink>
            )}

            {props === null || props === undefined ? (
              <Skeleton width={300} height={100} />
            ) : (
              <EpisodeDescription
                variant="secondary"
                size="normal"
                textAlign="start"
              >
                {props.episode.description}
              </EpisodeDescription>
            )}
          </EpisodeDetailsContainer>

          <EpisodeListenButtonContainer>
            <Button type="button" variant="primary" size="normal">
              Listen
            </Button>
          </EpisodeListenButtonContainer>
        </EpisodeHeader>
      </EpisodeContainer>
    </Scrollbars>
  );
};

Episode.getStaticProps = async () => {
  const environment = RelayEnvironment();
  const queryProps = await fetchQuery(environment, query, {});
  const initialRecords = environment.getStore().getSource().toJSON();

  return {
    props: {
      queryProps,
      initialRecords,
    },
  };
};

export default Episode;
