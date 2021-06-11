import { memo } from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
} from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { Interpreter } from "xstate";

import { RightControlsContainer } from "./RightControls.styles";

import Volume from "./Volume/Volume";

import {
  MachineContext,
  MachineEvent,
} from "src/machines/Player/PlayerMachine.types";

type Props = {
  service: Interpreter<MachineContext, any, MachineEvent>;
  onMute: () => void;
  onVolume: (value: number) => void;
  onRate: (value: string) => void;
};

const RightControls = ({ service, onMute, onVolume, onRate }: Props) => {
  return (
    <RightControlsContainer>
      <Menu>
        <Tooltip label="Rate" aria-label="Rate">
          <MenuButton
            as={IconButton}
            aria-label="Rate options"
            variant="light"
            icon={<BsClock size="20px" />}
            alignSelf="center"
          />
        </Tooltip>
        <MenuList>
          <MenuItem onClick={() => onRate("0.5")}>0.5x</MenuItem>
          <MenuItem onClick={() => onRate("1.0")}>1.0x</MenuItem>
          <MenuItem onClick={() => onRate("1.5")}>1.5x</MenuItem>
          <MenuItem onClick={() => onRate("2.0")}>2.0x</MenuItem>
          <MenuItem onClick={() => onRate("2.5")}>2.5x</MenuItem>
          <MenuItem onClick={() => onRate("3.0")}>3.0x</MenuItem>
        </MenuList>
      </Menu>

      <Volume service={service} onVolume={onVolume} onMute={onMute} />
    </RightControlsContainer>
  );
};

export default memo(RightControls);
