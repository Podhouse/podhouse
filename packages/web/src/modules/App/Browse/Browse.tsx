import React, { lazy, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

import Trending from "./Trending/Trending";

import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";
import SkeletonPodcastsWithOnlyAvatarList from "src/components/Skeletons/SkeletonPodcastsWithOnlyAvatarList/SkeletonPodcastsWithOnlyAvatarList";

import { BrowseContainer, BrowseSkeletonContainer } from "./Browse.styles";

const Browse = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
        <Suspense
          fallback={
            <BrowseSkeletonContainer>
              <SkeletonPodcastsWithOnlyAvatarList />
            </BrowseSkeletonContainer>
          }
        >
          <BrowseContainer>
            <Trending />
          </BrowseContainer>
        </Suspense>
      </ErrorBoundary>
    </Scrollbars>
  );
};

export default Browse;
