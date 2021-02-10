import React, { useCallback } from "react";
import { Helmet } from "react-helmet";
import graphql from "babel-plugin-relay/macro";
import { GraphQLTaggedNode } from "react-relay";
import {
  usePreloadedQuery,
  usePaginationFragment,
  PreloadedQuery,
} from "react-relay/hooks";
import { useLocation } from "react-router-dom";

import { GenrePodcastContainer } from "./GenrePodcast.styles";

import Featured from "src/components/Featured/Featured";

import PodcastsWithOnlyAvatarList from "src/components/Lists/PodcastsWithOnlyAvatarList/PodcastsWithOnlyAvatarList";

import { GenrePaginationQuery } from "./__generated__/GenrePaginationQuery.graphql";
import { GenrePodcast_podcasts$key } from "./__generated__/GenrePodcast_podcasts.graphql";

import { GenreQuery } from "../__generated__/GenreQuery.graphql";

import { browse } from "src/utils/featured";

const fragment = graphql`
  fragment GenrePodcast_podcasts on Query
  @argumentDefinitions(
    primaryGenre: { type: "String" }
    after: { type: "String" }
    first: { type: "Int", defaultValue: 15 }
    before: { type: "String" }
    last: { type: "Int" }
  )
  @refetchable(queryName: "GenrePaginationQuery") {
    podcastsByGenre(
      primaryGenre: $primaryGenre
      after: $after
      first: $first
      before: $before
      last: $last
    ) @connection(key: "GenrePodcast_podcastsByGenre") {
      edges {
        node {
          _id
          name
          appleId
          image
        }
      }
    }
  }
`;

interface Props {
  genreQuery: GraphQLTaggedNode;
  queryReference: PreloadedQuery<GenreQuery>;
  shouldLoadMore: boolean;
  primaryGenre: string;
}

const GenrePodcast = ({
  genreQuery,
  queryReference,
  shouldLoadMore,
  primaryGenre,
}: Props) => {
  const location = useLocation();

  const query = usePreloadedQuery<GenreQuery>(genreQuery, queryReference);

  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    GenrePaginationQuery,
    GenrePodcast_podcasts$key
  >(fragment, query);

  const loadMore = useCallback(() => {
    if (isLoadingNext) return;
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  if (shouldLoadMore === true) loadMore();

  return (
    <GenrePodcastContainer>
      <Helmet>
        <title>{primaryGenre}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="The best podcast web app to listen to your favorite podcasts"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content="Podhouse" />
        <meta
          property="twitter:description"
          content="The best podcast web app to listen to your favorite podcasts"
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/C1TOvBB.jpg"
        />
        <meta property="twitter:url" content={location.pathname} />

        {/* Open Graph */}
        <meta property="og:url" content={location.pathname} key="ogurl" />
        <meta
          property="og:image"
          content="https://i.imgur.com/C1TOvBB.jpg"
          key="ogimage"
        />
        <meta property="og:site_name" content="Podhouse" key="ogsitename" />
        <meta property="og:title" content="Podhouse" key="ogtitle" />
        <meta
          property="og:description"
          content="The best podcast web app to listen to your favorite podcasts"
          key="ogdesc"
        />
      </Helmet>

      <Featured featured={browse} />

      <PodcastsWithOnlyAvatarList
        title={primaryGenre}
        podcasts={data.podcastsByGenre}
      />
    </GenrePodcastContainer>
  );
};

export default GenrePodcast;
