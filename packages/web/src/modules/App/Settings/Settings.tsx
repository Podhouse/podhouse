import React, { Suspense } from "react";
import { Box, Text, Link, Stack } from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars";

import { SettingsContainer } from "./Settings.styles";

const Settings = () => {
  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <SettingsContainer>
        <Box
          d="flex"
          alignItems="center"
          justifyContent="center"
          w="100%"
          h="100%"
          bgColor="red"
        >
          <Stack spacing={4} shouldWrapChildren align="center">
            <Text color="#101010" maxWidth="300px" textAlign="center">
              You should be logged in to see your subscriptions
            </Text>
            <Link color="brand.900" fontWeight="bold" textTransform="uppercase">
              Login
            </Link>
          </Stack>
        </Box>
      </SettingsContainer>
    </Scrollbars>
  );
};

export default Settings;
