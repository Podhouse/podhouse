import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { RehawkProvider } from "rehawk";

import "keen-slider/keen-slider.min.css";

import { AuthProvider } from "src/context/Auth/Auth";
import { SettingsProvider } from "src/context/Settings/Settings";
import { QueueProvider } from "src/context/Queue/Queue";
import { RateProvider } from "src/context/Rate/Rate";

import App from "src/components/App/App";

import theme from "src/system/theme";

const Provider = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <RehawkProvider>
        <AuthProvider>
          <SettingsProvider>
            <QueueProvider>
              <RateProvider>
                <App />
              </RateProvider>
            </QueueProvider>
          </SettingsProvider>
        </AuthProvider>
      </RehawkProvider>
    </ChakraProvider>
    <Global
      styles={`
        /* cyrillic-ext */
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          src: "url(fonts/Inter/Inter-VariableFont_slnt,wght.ttf) format('ttf')"
        }
        `}
    />
    <CSSReset />
  </BrowserRouter>
);

export default Provider;
