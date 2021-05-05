import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Link as ChakraLink,
  Stack,
  Image,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import {
  BsPerson,
  BsToggleOn,
  BsToggleOff,
  BsGear,
  BsForward,
} from "react-icons/bs";
import { useHistory } from "react-router-dom";

import { SettingsContainer } from "./Settings.styles";

const Settings = () => {
  const history = useHistory();
  const { colorMode, toggleColorMode } = useColorMode();

  const onColorMode = () => {
    if (colorMode === "dark") {
      return <BsToggleOn size="16px" />;
    } else {
      return <BsToggleOff size="16px" />;
    }
  };

  return (
    <SettingsContainer>
      <Menu>
        <Tooltip label="Settings" aria-label="Settings">
          <MenuButton
            as={IconButton}
            aria-label="Settings menu"
            variant="light"
            icon={<BsPerson size="20px" />}
            alignSelf="center"
          />
        </Tooltip>
        <MenuList>
          <MenuItem icon={onColorMode()} onClick={toggleColorMode}>
            Dark mode
          </MenuItem>
          <MenuItem
            icon={<BsGear size="16px" />}
            onClick={() => history.push("/settings")}
          >
            Settings
          </MenuItem>
          <MenuItem
            icon={<BsForward size="16px" />}
            onClick={() => history.push("/settings")}
          >
            Log out
          </MenuItem>
        </MenuList>
      </Menu>
    </SettingsContainer>
  );
};

export default Settings;
