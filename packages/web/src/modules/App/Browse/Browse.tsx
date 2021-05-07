import React, { Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";
import { Stack } from "@chakra-ui/react";

import Trending from "./Trending/Trending";

import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";
import SkeletonPodcastsWithOnlyAvatarList from "src/components/Skeletons/SkeletonPodcastsWithOnlyAvatarList/SkeletonPodcastsWithOnlyAvatarList";

const Browse = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <ErrorFallback resetErrorBoundary={resetErrorBoundary} />
        )}
      >
        <Suspense fallback={<SkeletonPodcastsWithOnlyAvatarList />}>
          <Stack
            direction="column"
            spacing="20px"
            w="100%"
            maxW="1000px"
            h="fit-content"
            margin="0 auto"
            p="20px"
          >
            <Trending />
          </Stack>
        </Suspense>
      </ErrorBoundary>
    </Scrollbars>
  );
};

export default Browse;
