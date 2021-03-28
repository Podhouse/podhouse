import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
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
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-Bold.ttf") format("truetype");
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans Extrablack";
          src: url("fonts/passenger-sans/PassengerSans-Extrablack.ttf") format("truetype");
          font-weight: 800;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-BoldItalic.ttf") format("truetype");
          font-weight: 600;
          font-style: italic;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-BlackItalic.ttf") format("truetype");
          font-weight: bold;
          font-style: italic;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-Black.ttf") format("truetype");
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans Exblack";
          src: url("fonts/passenger-sans/PassengerSans-ExtrablackItalic.ttf") format("truetype");
          font-weight: 800;
          font-style: italic;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans Exlight";
          src: url("fonts/passenger-sans/PassengerSans-ExtralightItalic.ttf") format("truetype");
          font-weight: 100;
          font-style: italic;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-Medium.ttf") format("truetype");
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-Light.ttf") format("truetype");
          font-weight: 200;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-Extralight.ttf") format("truetype");
          font-weight: 100;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-LightItalic.ttf") format("truetype");
          font-weight: 200;
          font-style: italic;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-Italic.ttf") format("truetype");
          font-weight: 300;
          font-style: italic;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-Semibold.ttf") format("truetype");
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-SemiboldItalic.ttf") format("truetype");
          font-weight: 500;
          font-style: italic;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-MediumItalic.ttf") format("truetype");
          font-weight: 500;
          font-style: italic;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-Regular.ttf") format("truetype");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-Thin.ttf") format("truetype");
          font-weight: 100;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans";
          src: url("fonts/passenger-sans/PassengerSans-ThinItalic.ttf") format("truetype");
          font-weight: 100;
          font-style: italic;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans Ultra";
          src: url("fonts/passenger-sans/PassengerSans-Ultra.ttf") format("truetype");
          font-weight: 900;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: "Passenger Sans Ultra";
          src: url("fonts/passenger-sans/PassengerSans-UltraItalic.ttf") format("truetype");
          font-weight: 900;
          font-style: italic;
          font-display: swap;
        }
        `}
      />

      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </BrowserRouter>
  </RelayEnvironmentProvider>
);

export default Provider;
