import React, { useState, useEffect, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useQueryLoader } from "react-relay/hooks";

import SearchPodcast from "./SearchPodcast/SearchPodcast";

import SkeletonPodcastsWithOnlyAvatarList from "src/components/Skeletons/SkeletonPodcastsWithOnlyAvatarList/SkeletonPodcastsWithOnlyAvatarList";

import { useSearchContext } from "src/machines/Search/SearchContext";

import { SearchQuery } from "./__generated__/SearchQuery.graphql";

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

const Search = () => {
  const { search }: { search: string } = useSearchContext();

  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false);

  const [queryReference, loadQuery, disposeQuery] = useQueryLoader<SearchQuery>(
    searchQuery
  );

  useEffect(() => {
    if (search !== "") {
      loadQuery({ name: search }, { fetchPolicy: "store-or-network" });
    } else {
      disposeQuery();
    }
  }, [loadQuery, disposeQuery, search]);

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
      {queryReference && (
        <Suspense fallback={<SkeletonPodcastsWithOnlyAvatarList />}>
          <SearchPodcast
            searchQuery={searchQuery}
            queryReference={queryReference}
            shouldLoadMore={shouldLoadMore}
          />
        </Suspense>
      )}
    </Scrollbars>
  );
};

export default Search;
