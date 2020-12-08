import React, { useCallback } from "react";
import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay/hooks";

import { SearchPodcastContainer } from "./SearchPodcast.styles";

import PodcastsWithOnlyAvatarList from "src/components/Lists/PodcastsWithOnlyAvatarList/PodcastsWithOnlyAvatarList";

import { SearchPodcastPaginationQuery } from "./__generated__/SearchPodcastPaginationQuery.graphql";
import { SearchPodcast_podcastsByName$key } from "./__generated__/SearchPodcast_podcastsByName.graphql";

import { SearchQueryResponse } from "../__generated__/SearchQuery.graphql";

const query = graphql`
  fragment SearchPodcast_podcastsByName on Query
  @argumentDefinitions(
    name: { type: "String" }
    after: { type: "String" }
    first: { type: "Int", defaultValue: 10 }
    before: { type: "String" }
    last: { type: "Int" }
  )
  @refetchable(queryName: "SearchPodcastPaginationQuery") {
    podcastsByName(
      name: $name
      after: $after
      first: $first
      before: $before
      last: $last
    ) @connection(key: "SearchPodcast_podcastsByName") {
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
  searchQuery: SearchQueryResponse;
  shouldLoadMore: boolean;
}

const SearchPodcast = ({ searchQuery, shouldLoadMore }: Props) => {
  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    SearchPodcastPaginationQuery,
    SearchPodcast_podcastsByName$key
  >(query, searchQuery);

  const loadMore = useCallback(() => {
    if (isLoadingNext) return;
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  if (shouldLoadMore === true) loadMore();

  return (
    <SearchPodcastContainer>
      <PodcastsWithOnlyAvatarList
        title="Search"
        edges={data.podcastsByName.edges}
      />
    </SearchPodcastContainer>
  );
};

export default SearchPodcast;
