import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "src/components/App/App";

import { PlayerProvider } from "src/machines/Player/";

import theme from "src/system/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: true,
    },
  },
});

const Provider = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <PlayerProvider>
          <App />
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
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} position={"top-right"} />
      )}
    </QueryClientProvider>
  </BrowserRouter>
);

export default Provider;
