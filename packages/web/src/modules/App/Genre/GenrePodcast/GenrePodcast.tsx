import React, { useCallback } from "react";
import graphql from "babel-plugin-relay/macro";
import { GraphQLTaggedNode } from "react-relay";
import {
  usePreloadedQuery,
  usePaginationFragment,
  PreloadedQuery,
} from "react-relay/hooks";

import { GenrePodcastContainer } from "./GenrePodcast.styles";

import Featured from "src/components/Featured/Featured";

import PodcastsWithOnlyAvatarList from "src/components/Lists/PodcastsWithOnlyAvatarList/PodcastsWithOnlyAvatarList";

import { GenrePaginationQuery } from "./__generated__/GenrePaginationQuery.graphql";
import { GenrePodcast_podcasts$key } from "./__generated__/GenrePodcast_podcasts.graphql";

import { GenreQuery } from "../__generated__/GenreQuery.graphql";

import featured from "src/utils/featured";

const fragment = graphql`
  fragment GenrePodcast_podcasts on Query
  @argumentDefinitions(
    primaryGenre: { type: "String!" }
    after: { type: "String" }
    first: { type: "Int", defaultValue: 25 }
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
          id
          _id
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
  const query = usePreloadedQuery<GenreQuery>(genreQuery, queryReference);

  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    GenrePaginationQuery,
    GenrePodcast_podcasts$key
  >(fragment, query);

  const loadMore = useCallback(() => {
    if (isLoadingNext) return;
    loadNext(25);
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
