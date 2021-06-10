import { memo, useCallback } from "react";

import DesktopPodcast from "./DesktopPodcast/DesktopPodcast";
import MobilePodcast from "./MobilePodcast/MobilePodcast";

import useWindowSize from "src/hooks/useWindowSize";

import { Episode } from "src/queries/types";

interface Props {
  episode: Episode;
}

const Podcast = ({ episode }: Props) => {
  const { innerWidth } = useWindowSize();

  const renderPodcast = useCallback(() => {
    if (innerWidth >= 800) {
      return <DesktopPodcast episode={episode} />;
    } else {
      return <MobilePodcast episode={episode} />;
    }
  }, [episode, innerWidth]);

  return renderPodcast();
};

const comparisonFn = (prevProps: Props, nextProps: Props) => {
  return prevProps.episode === nextProps.episode;
};

export default memo(Podcast, comparisonFn);
