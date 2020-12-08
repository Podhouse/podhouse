import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import "keen-slider/keen-slider.min.css";

import { PlayerProvider } from "src/machines/Player/Player";
import { AuthProvider } from "src/machines/Auth/AuthContext";
import { SettingsProvider } from "src/machines/Settings/SettingsContext";
import { QueueProvider } from "src/machines/Queue/QueueContext";
import { RateProvider } from "src/machines/Rate/RateContext";

import App from "src/components/App/App";

import theme from "src/system/theme";

const Provider = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <PlayerProvider>
        <AuthProvider>
          <SettingsProvider>
            <QueueProvider>
              <RateProvider>
                <App />
              </RateProvider>
            </QueueProvider>
          </SettingsProvider>
        </AuthProvider>
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
    <CSSReset />
  </BrowserRouter>
);

export default Provider;
