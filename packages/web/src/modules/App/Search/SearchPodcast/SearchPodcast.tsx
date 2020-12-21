import React, { useCallback } from "react";
import graphql from "babel-plugin-relay/macro";
import { GraphQLTaggedNode } from "react-relay";
import {
  usePaginationFragment,
  usePreloadedQuery,
  PreloadedQuery,
} from "react-relay/hooks";

import { SearchPodcastContainer } from "./SearchPodcast.styles";

import PodcastsWithOnlyAvatarList from "src/components/Lists/PodcastsWithOnlyAvatarList/PodcastsWithOnlyAvatarList";

import { SearchPodcastPaginationQuery } from "./__generated__/SearchPodcastPaginationQuery.graphql";
import { SearchPodcast_podcasts$key } from "./__generated__/SearchPodcast_podcasts.graphql";

import { SearchQuery } from "../__generated__/SearchQuery.graphql";

const fragment = graphql`
  fragment SearchPodcast_podcasts on Query
  @argumentDefinitions(
    podcastName: { type: "String" }
    after: { type: "String" }
    first: { type: "Int", defaultValue: 25 }
    before: { type: "String" }
    last: { type: "Int" }
  )
  @refetchable(queryName: "SearchPodcastPaginationQuery") {
    podcastsByName(
      podcastName: $podcastName
      after: $after
      first: $first
      before: $before
      last: $last
    ) @connection(key: "SearchPodcast_podcastsByName") {
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
  searchQuery: GraphQLTaggedNode;
  queryReference: PreloadedQuery<SearchQuery>;
  shouldLoadMore: boolean;
}

const SearchPodcast = ({
  searchQuery,
  queryReference,
  shouldLoadMore,
}: Props) => {
  const query = usePreloadedQuery<SearchQuery>(searchQuery, queryReference);

  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    SearchPodcastPaginationQuery,
    SearchPodcast_podcasts$key
  >(fragment, query);

  const loadMore = useCallback(() => {
    if (isLoadingNext) return;
    loadNext(25);
  }, [isLoadingNext, loadNext]);

  if (shouldLoadMore === true) loadMore();

  console.log("query: ", query);
  console.log("data: ", data);

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
