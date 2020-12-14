import React, { useCallback } from "react";
import graphql from "babel-plugin-relay/macro";
import { GraphQLTaggedNode } from "react-relay";
import { usePaginationFragment, usePreloadedQuery } from "react-relay/hooks";

import { SearchPodcastContainer } from "./SearchPodcast.styles";

import PodcastsWithOnlyAvatarList from "src/components/Lists/PodcastsWithOnlyAvatarList/PodcastsWithOnlyAvatarList";

import { SearchPodcastPaginationQuery } from "./__generated__/SearchPodcastPaginationQuery.graphql";
import { SearchPodcast_podcastsByName$key } from "./__generated__/SearchPodcast_podcastsByName.graphql";

import { SearchQuery } from "../__generated__/SearchQuery.graphql";

const fragment = graphql`
  fragment SearchPodcast_podcastsByName on Query
  @argumentDefinitions(
    after: { type: "String" }
    first: { type: "Int", defaultValue: 10 }
    before: { type: "String" }
    last: { type: "Int" }
    name: { type: "String" }
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
  searchQuery: GraphQLTaggedNode;
  queryReference: any;
  shouldLoadMore: boolean;
}

const SearchPodcast = ({
  searchQuery,
  queryReference,
  shouldLoadMore,
}: Props) => {
  const results = usePreloadedQuery<SearchQuery>(searchQuery, queryReference);

  console.log("results: ", results);

  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    SearchPodcastPaginationQuery,
    SearchPodcast_podcastsByName$key
  >(fragment, results);

  console.log("data: ", data);

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
