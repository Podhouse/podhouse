import React, { useState, useEffect, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useQueryLoader } from "react-relay/hooks";
import { ErrorBoundary } from "react-error-boundary";
import { useDebounce } from "use-debounce";
import ReactGA from "react-ga";

import SearchPodcast from "./SearchPodcast/SearchPodcast";
import SkeletonPodcastsWithOnlyAvatarList from "src/components/Skeletons/SkeletonPodcastsWithOnlyAvatarList/SkeletonPodcastsWithOnlyAvatarList";
import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";

import { SearchContainer } from "./Search.styles";

import { useSearchContext } from "src/machines/Search/SearchContext";

import { SearchQuery } from "./__generated__/SearchQuery.graphql";

ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_ID}`);
ReactGA.pageview(window.location.pathname + window.location.search);

const searchQuery = graphql`
  query SearchQuery($podcastName: String!) {
    ...SearchPodcast_podcasts @arguments(podcastName: $podcastName)
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
  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false);

  const [queryReference, loadQuery, disposeQuery] = useQueryLoader<SearchQuery>(
    searchQuery
  );

  const { search }: { search: string } = useSearchContext();
  const [debouncedSearch] = useDebounce(search, 500);

  const onLoadMore = (value: ScrollFrameType) => {
    if (value.top === 1) {
      setShouldLoadMore(true);
    }
    setShouldLoadMore(false);
  };

  useEffect(() => {
    loadQuery({ podcastName: debouncedSearch });

    return () => {
      disposeQuery();
    };
  }, [loadQuery, disposeQuery, debouncedSearch]);

  const onRefetchQuery = () => {
    loadQuery({ podcastName: debouncedSearch });
  };

  return (
    <Scrollbars
      onScrollFrame={onLoadMore}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      {queryReference && (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={onRefetchQuery}
        >
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
