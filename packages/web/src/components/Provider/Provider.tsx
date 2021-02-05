import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { RelayEnvironmentProvider } from "react-relay/hooks";

import environment from "src/relay/RelayEnvironment";

import { SearchProvider } from "src/machines/Search/SearchContext";
import { PlayerProvider } from "src/machines/Player/PlayerContext";
import { AuthProvider } from "src/machines/Auth/AuthContext";
import { SettingsProvider } from "src/machines/Settings/SettingsContext";
import { QueueProvider } from "src/machines/Queue/QueueContext";
import { RateProvider } from "src/machines/Rate/RateContext";

import App from "src/components/App/App";

import theme from "src/system/theme";

import "keen-slider/keen-slider.min.css";

const Provider = () => (
  <RelayEnvironmentProvider environment={environment}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <PlayerProvider>
          <SearchProvider>
            <AuthProvider>
              <SettingsProvider>
                <QueueProvider>
                  <RateProvider>
                    <App />
                  </RateProvider>
                </QueueProvider>
              </SettingsProvider>
            </AuthProvider>
          </SearchProvider>
        </PlayerProvider>
      </ChakraProvider>
      <Global
        styles={`
        @font-face {
          font-family: 'Inter';
          src: url('./fonts/Inter-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        } 
        
        @font-face {
          font-family: 'Inter';
          src: url('./fonts/Inter-Black.ttf') format('truetype');
          font-weight: 900;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Inter';
          src: url('./fonts/Inter-ExtraBold.ttf') format('truetype');
          font-weight: 800;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Inter';
          src: url('./fonts/Inter-Bold.ttf') format('truetype');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Inter';
          src: url('./fonts/Inter-ExtraLight.ttf') format('truetype');
          font-weight: 200;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Inter';
          src: url('./fonts/Inter-Light.ttf') format('truetype');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Inter';
          src: url('./fonts/Inter-Medium.ttf') format('truetype');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Inter';
          src: url('./fonts/Inter-Regular_1.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Inter';
          src: url('./fonts/Inter-Thin.ttf') format('truetype');
          font-weight: 100;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Inter';
          src: url('./fonts/Inter-SemiBold.ttf') format('truetype');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }
        `}
      />
    </BrowserRouter>
  </RelayEnvironmentProvider>
);

export default Provider;
