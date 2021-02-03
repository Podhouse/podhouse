import React, { useCallback } from "react";
import { Helmet } from "react-helmet";
import graphql from "babel-plugin-relay/macro";
import { GraphQLTaggedNode } from "react-relay";
import {
  usePaginationFragment,
  usePreloadedQuery,
  PreloadedQuery,
} from "react-relay/hooks";
import { useLocation } from "react-router-dom";

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
    )
      @connection(
        key: "SearchPodcast_podcastsByName"
        filters: ["podcastName"]
      ) {
      edges {
        node {
          id
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
  searchQuery: GraphQLTaggedNode;
  queryReference: PreloadedQuery<SearchQuery>;
  shouldLoadMore: boolean;
}

const SearchPodcast = ({
  searchQuery,
  queryReference,
  shouldLoadMore,
}: Props) => {
  const location = useLocation();

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

  return (
    <SearchPodcastContainer>
      <Helmet>
        <title>Search</title>
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

      <PodcastsWithOnlyAvatarList
        title="Search"
        edges={data.podcastsByName.edges}
      />
    </SearchPodcastContainer>
  );
};

export default SearchPodcast;
