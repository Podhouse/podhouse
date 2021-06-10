import React, { Suspense, memo } from "react";
import Scrollbars from "react-custom-scrollbars";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";
import SkeletonPodcastPage from "src/components/Skeletons/SkeletonPodcastPage/SkeletonPodcastPage";

import Header from "./Header/Header";
import Episodes from "./Episodes/Episodes";

import { PodcastContainer } from "./Podcast.styles";

import { Episode } from "src/machines/Player/PlayerMachine.types";

interface Props {
  currentEpisode: Episode | null;
  playing: boolean;
  onToggle: (episode: Episode) => void;
  onPlay: () => void;
  onPause: () => void;
}

const Podcast = ({
  currentEpisode,
  playing,
  onToggle,
  onPlay,
  onPause,
}: Props) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
        <Suspense fallback={<SkeletonPodcastPage />}>
          <PodcastContainer>
            <Header />
            <Episodes
              currentEpisode={currentEpisode}
              playing={playing}
              onToggle={onToggle}
              onPlay={onPlay}
              onPause={onPause}
            />
          </PodcastContainer>
        </Suspense>
      </ErrorBoundary>
    </Scrollbars>
  );
};

export default memo(Podcast);
