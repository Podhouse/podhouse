import React, { useState, useEffect, Suspense } from "react";
import { Heading } from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useQueryLoader } from "react-relay/hooks";
import { useDebounce } from "use-debounce";

import SearchPodcast from "./SearchPodcast/SearchPodcast";

import SkeletonPodcastsWithOnlyAvatarList from "src/components/Skeletons/SkeletonPodcastsWithOnlyAvatarList/SkeletonPodcastsWithOnlyAvatarList";

import { useSearchContext } from "src/machines/Search/SearchContext";

import {
  SearchQuery,
  SearchQueryResponse,
  SearchQueryVariables,
} from "./__generated__/SearchQuery.graphql";

const searchQuery = graphql`
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

  const [queryReference, loadQuery, disposeQuery] = useQueryLoader<SearchQuery>(
    searchQuery
  );

  useEffect(() => {
    loadQuery({ name: searchArgs.name });

    return () => {
      disposeQuery();
    };
  }, [searchArgs.name]);

  const onLoadMore = (value: ScrollFrameType) => {
    if (value.top === 1) {
      setShouldLoadMore(true);
    }
    setShouldLoadMore(false);
  };

  if (!searchArgs.name) {
    return <Heading>here you can search podcasts</Heading>;
  }

  return (
    <Scrollbars
      onScrollFrame={onLoadMore}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      <SearchPodcast
        searchQuery={searchQuery}
        queryReference={queryReference}
        shouldLoadMore={shouldLoadMore}
      />
    </Scrollbars>
  );
};

const Search = () => {
  const { search }: { search: string } = useSearchContext();

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
