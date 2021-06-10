import { memo } from "react";
import { useColorMode } from "@chakra-ui/react";

import { PlayerContainer } from "./Player.styles";

import Podcast from "./Podcast/Podcast";
import Controls from "./Controls/Controls";
import RightControls from "./RightControls/RightControls";

import SkeletonPodcast from "src/components/Skeletons/SkeletonPlayer/SkeletonPodcast/SkeletonPodcast";
import SkeletonControls from "src/components/Skeletons/SkeletonPlayer/SkeletonControls/SkeletonControls";
import SkeletonRightControls from "src/components/Skeletons/SkeletonPlayer/SkeletonRightControls/SkeletonRightControls";

import { ReturnArgs } from "src/hooks/usePlayer/usePlayer.types";

type Props = ReturnArgs;

const Player = (props: Props) => {
  const { colorMode } = useColorMode();

  const backgroundColor = colorMode === "dark" ? "#151419" : "white";

  if (props.initial) {
    return <PlayerContainer bgColor={backgroundColor}></PlayerContainer>;
  }

  if (props.loading || !props.episode) {
    return (
      <PlayerContainer bgColor={backgroundColor}>
        <SkeletonPodcast />
        <SkeletonControls />
        <SkeletonRightControls />
      </PlayerContainer>
    );
  }

  return (
    <PlayerContainer bgColor={backgroundColor}>
      <Podcast episode={props.episode} />

      {/* <Controls
        playing={props.playing}
        seek={props.seek}
        duration={props.duration}
        onToggle={props.onToggle}
        onPlay={props.onPlay}
        onPause={props.onPause}
        onSeek={props.onSeek}
        onForward={props.onForward}
        onBackward={props.onBackward}
      />

      <RightControls
        volume={props.volume}
        mute={props.mute}
        onVolume={props.onVolume}
        onMute={props.onMute}
        onRate={props.onRate}
      /> */}
    </PlayerContainer>
  );
};

const comparisonFn = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.initial === nextProps.initial &&
    prevProps.loading === nextProps.loading
  );
};

export default memo(Player, comparisonFn);
