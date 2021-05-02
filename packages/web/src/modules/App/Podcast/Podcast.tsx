import React, { Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";
import SkeletonPodcastPage from "src/components/Skeletons/SkeletonPodcastPage/SkeletonPodcastPage";

import Header from "./Header/Header";
import Episodes from "./Episodes/Episodes";

import { PodcastContainer } from "./Podcast.styles";

const Podcast = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
        <Suspense fallback={<SkeletonPodcastPage />}>
          <PodcastContainer>
            <Header />
            <Episodes />
          </PodcastContainer>
        </Suspense>
      </ErrorBoundary>
    </Scrollbars>
  );
};

export default Podcast;
