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
    first: { type: "Int", defaultValue: 25 }
    last: { type: "Int" }
    before: { type: "String" }
    after: { type: "String" }
    name: { type: "String" }
  )
  @refetchable(queryName: "SearchPodcastPaginationQuery") {
    podcastsByName(
      first: $first
      last: $last
      before: $before
      after: $after
      name: $name
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
  const query = usePreloadedQuery<SearchQuery>(searchQuery, queryReference);

  console.log("query: ", query);

  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    SearchPodcastPaginationQuery,
    SearchPodcast_podcastsByName$key
  >(fragment, query);

  console.log("data: ", data);

  const loadMore = useCallback(() => {
    if (isLoadingNext) return;
    loadNext(25);
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
