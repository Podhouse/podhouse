import React, { useState, useEffect, Suspense } from "react";
import { useDebounce } from "use-debounce";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useQueryLoader } from "react-relay/hooks";
import { ErrorBoundary } from "react-error-boundary";

import SearchPodcast from "./SearchPodcast/SearchPodcast";

import SkeletonPodcastsWithOnlyAvatarList from "src/components/Skeletons/SkeletonPodcastsWithOnlyAvatarList/SkeletonPodcastsWithOnlyAvatarList";
import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";

import { SearchContainer } from "./Search.styles";

import { useSearchContext } from "src/machines/Search/SearchContext";

import { SearchQuery } from "./__generated__/SearchQuery.graphql";

const searchQuery = graphql`
  query SearchQuery($podcastName: String!) {
    ...SearchPodcast_podcastsByName @arguments(podcastName: $podcastName)
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

const Search = () => {
  const { search }: { search: string } = useSearchContext();
  const [debouncedSearch] = useDebounce(search, 500);

  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false);

  const [queryReference, loadQuery] = useQueryLoader<SearchQuery>(searchQuery);

  const onLoadMore = (value: ScrollFrameType) => {
    if (value.top === 1) {
      setShouldLoadMore(true);
    }
    setShouldLoadMore(false);
  };

  useEffect(() => {
    loadQuery({ podcastName: debouncedSearch }, { fetchPolicy: "store-or-network" });
  }, [loadQuery, debouncedSearch]);

  return (
    <Scrollbars
      onScrollFrame={onLoadMore}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      {queryReference && (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense
            fallback={
              <SearchContainer>
                <SkeletonPodcastsWithOnlyAvatarList />
              </SearchContainer>
            }
          >
            <SearchPodcast
              searchQuery={searchQuery}
              queryReference={queryReference}
              shouldLoadMore={shouldLoadMore}
            />
          </Suspense>
        </ErrorBoundary>
      )}
    </Scrollbars>
  );
};

export default Search;
