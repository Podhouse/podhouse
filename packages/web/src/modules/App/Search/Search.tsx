import React, { useState, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";

import SearchPodcast from "./SearchPodcast/SearchPodcast";

import SkeletonPodcastsWithOnlyAvatarList from "src/components/Skeletons/SkeletonPodcastsWithOnlyAvatarList/SkeletonPodcastsWithOnlyAvatarList";

import { useSearchContext } from "src/machines/Search/SearchContext";

import {
  SearchQuery,
  SearchQueryResponse,
  SearchQueryVariables,
} from "./__generated__/SearchQuery.graphql";

const query = graphql`
  query SearchQuery($name: String!) {
    ...SearchPodcast_podcastsByName @arguments(name: $name)
  }
`;

type ScrollFrameType = {
  clientHeight: number;
  clientWidth: number;
  left: number;
  scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
  top: number;
};

type Props = {
  searchArgs: SearchQueryVariables;
};

const SearchComponent = ({ searchArgs }: Props) => {
  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false);

  const searchQuery: SearchQueryResponse = useLazyLoadQuery<SearchQuery>(
    query,
    searchArgs,
    {
      fetchPolicy: "store-and-network",
      fetchKey: searchArgs.name,
    }
  );

  const onLoadMore = (value: ScrollFrameType) => {
    if (value.top === 1) {
      setShouldLoadMore(true);
    }
    setShouldLoadMore(false);
  };

  return (
    <Scrollbars
      onScrollFrame={onLoadMore}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      <SearchPodcast
        searchQuery={searchQuery}
        shouldLoadMore={shouldLoadMore}
      />
    </Scrollbars>
  );
};

const Search = () => {
  const { search } = useSearchContext();

  const searchArgs: SearchQueryVariables = {
    name: search,
  };

  return (
    <Suspense fallback={<SkeletonPodcastsWithOnlyAvatarList />}>
      <SearchComponent searchArgs={searchArgs} />
    </Suspense>
  );
};

export default Search;
