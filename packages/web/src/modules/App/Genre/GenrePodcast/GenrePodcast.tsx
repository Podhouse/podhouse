import React, { useCallback } from "react";
import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay/hooks";

import { GenrePodcastContainer } from "./GenrePodcast.styles";

import Featured from "src/components/Featured/Featured";

import PodcastsWithOnlyAvatarList from "src/components/Lists/PodcastsWithOnlyAvatarList/PodcastsWithOnlyAvatarList";

import { GenrePaginationQuery } from "./__generated__/GenrePaginationQuery.graphql";
import { GenrePodcast_podcasts$key } from "./__generated__/GenrePodcast_podcasts.graphql";

import { GenreQueryResponse } from "../__generated__/GenreQuery.graphql";

import featured from "src/utils/featured";

const query = graphql`
  fragment GenrePodcast_podcasts on Query
  @argumentDefinitions(
    primaryGenre: { type: "String" }
    after: { type: "String" }
    first: { type: "Int", defaultValue: 10 }
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
          image
        }
      }
    }
  }
`;

interface Props {
  genreQuery: GenreQueryResponse;
  primaryGenre: string;
  shouldLoadMore: boolean;
}

const GenrePodcast = ({ genreQuery, primaryGenre, shouldLoadMore }: Props) => {
  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    GenrePaginationQuery,
    GenrePodcast_podcasts$key
  >(query, genreQuery);

  const loadMore = useCallback(() => {
    if (isLoadingNext) return;
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  if (shouldLoadMore === true) loadMore();

  return (
    <GenrePodcastContainer>
      <Featured featured={featured} />
      <PodcastsWithOnlyAvatarList
        title={primaryGenre}
        edges={data.podcastsByGenre.edges}
      />
    </GenrePodcastContainer>
  );
};

export default GenrePodcast;
