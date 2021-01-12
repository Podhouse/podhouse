import React, { useState, useEffect, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useQueryLoader } from "react-relay/hooks";
import { useLocation } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import GenrePodcast from "./GenrePodcast/GenrePodcast";

import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";
import Featured from "src/components/Featured/Featured";
import SkeletonPodcastsWithOnlyAvatarList from "src/components/Skeletons/SkeletonPodcastsWithOnlyAvatarList/SkeletonPodcastsWithOnlyAvatarList";

import { GenreContainer } from "./Genre.styles";

import { GenreQuery } from "./__generated__/GenreQuery.graphql";

import featured from "src/utils/featured";

const genreQuery = graphql`
  query GenreQuery($primaryGenre: String!) {
    ...GenrePodcast_podcasts @arguments(primaryGenre: $primaryGenre)
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

type LocationState = {
  primaryGenre: string;
};

const Genre = () => {
  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false);

  const { state } = useLocation<LocationState>();

  const [queryReference, loadQuery, disposeQuery] = useQueryLoader<GenreQuery>(
    genreQuery
  );

  useEffect(() => {
    loadQuery({ primaryGenre: state.primaryGenre });

    return () => {
      disposeQuery();
    };
  }, [loadQuery, disposeQuery, state.primaryGenre]);

  const onLoadMore = (value: ScrollFrameType) => {
    if (value.top === 1) {
      setShouldLoadMore(true);
    }
    setShouldLoadMore(false);
  };

  const onResetQuery = () => {
    loadQuery({ primaryGenre: state.primaryGenre });
  };

  return (
    <Scrollbars
      onScrollFrame={onLoadMore}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      {queryReference && (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onResetQuery}>
          <Suspense
            fallback={
              <GenreContainer>
                <Featured featured={featured} />
                <SkeletonPodcastsWithOnlyAvatarList />
              </GenreContainer>
            }
          >
            <GenrePodcast
              genreQuery={genreQuery}
              queryReference={queryReference}
              shouldLoadMore={shouldLoadMore}
              primaryGenre={state.primaryGenre}
            />
          </Suspense>
        </ErrorBoundary>
      )}
    </Scrollbars>
  );
};

export default Genre;
