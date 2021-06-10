import { useCallback } from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { BsPerson, BsToggleOn, BsToggleOff } from "react-icons/bs";

import { SettingsContainer } from "./Settings.styles";

const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const onColorMode = useCallback(() => {
    if (colorMode === "dark") {
      return <BsToggleOn size="16px" />;
    } else {
      return <BsToggleOff size="16px" />;
    }
  }, [colorMode]);

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
        </MenuList>
      </Menu>
    </SettingsContainer>
  );
};

export default Settings;
