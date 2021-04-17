import React, { Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";
import SkeletonPage from "src/components/Skeletons/SkeletonPage/SkeletonPage";

import Header from "./Header/Header";
import Episodes from "./Episodes/Episodes";

import { PodcastContainer } from "./Podcast.styles";

const Podcast = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Scrollbars
      onScrollFrame={() => {}}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
        <Suspense fallback={<SkeletonPage episodes={true} />}>
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
