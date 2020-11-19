import React from "react";
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
  EpisodeListenButtonContainer,
} from "./Episode.styles";

import { RelayEnvironment } from "src/relay/RelayEnvironment";

import Button from "src/system/Button/Button";
import Link from "src/system/Link/Link";
import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";

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
            <Skeleton />
          ) : (
            <EpisodeAvatar src={props.episode.image} />
          )}

          <EpisodeDetailsContainer>
            {props === null || props === undefined ? (
              <Skeleton />
            ) : (
              <Heading as="h1" variant="primary" size="normal">
                {props.episode.title}
              </Heading>
            )}

            {props === null || props === undefined ? (
              <Skeleton />
            ) : (
              <Link
                href="/app/podcast/invisible"
                variant="secondary"
                size="normal"
              >
                {props.episode.title}
              </Link>
            )}

            {props === null || props === undefined ? (
              <Skeleton />
            ) : (
              <Paragraph variant="secondary" size="normal" textAlign="start">
                {props.episode.description}
              </Paragraph>
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
