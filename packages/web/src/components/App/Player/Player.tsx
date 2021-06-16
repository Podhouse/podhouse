import { memo } from "react";
import { useColorMode } from "@chakra-ui/react";
import { useSelector } from "@xstate/react";

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
  const initial = useSelector(props.service, (state) =>
    state.matches("initial")
  );
  const loading = useSelector(props.service, (state) =>
    state.matches("loading")
  );

  const { colorMode } = useColorMode();

  const backgroundColor = colorMode === "dark" ? "#151419" : "white";

  if (initial) {
    return <PlayerContainer bgColor={backgroundColor}></PlayerContainer>;
  }

  if (loading) {
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
      <Podcast service={props.service} />

      <Controls
        service={props.service}
        seek={props.seek}
        onToggle={props.onToggle}
        onPlay={props.onPlay}
        onPause={props.onPause}
        onSeek={props.onSeek}
        onForward={props.onForward}
        onBackward={props.onBackward}
      />

      <RightControls
        service={props.service}
        onVolume={props.onVolume}
        onMute={props.onMute}
        onRate={props.onRate}
      />
    </PlayerContainer>
  );
};

export default Player;
