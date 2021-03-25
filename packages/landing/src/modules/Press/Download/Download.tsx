import React from "react";
import { Heading, Link } from "@chakra-ui/react";

import {
  DownloadContainer,
  DownloadItemContainer,
  DownloadHeaderContainer,
  DownloadAssetsContainer,
} from "./Download.styles";

import PodhouseDark from "../../../../public/logo-dark.svg";
import PodhouseLight from "../../../../public/light-logo.svg";

const Download = () => (
  <DownloadContainer>
    <DownloadItemContainer>
      <DownloadHeaderContainer>
        <Heading
          color="#101010"
          as="h2"
          fontSize={36}
          letterSpacing="-0.03em"
          textAlign="center"
          fontWeight="600"
        >
          Dark
        </Heading>

        <Link
          href="/logo/dark.zip"
          download
          color="#101010"
          fontSize={16}
          lineHeight="30px"
          fontWeight="400"
        >
          download
        </Link>
      </DownloadHeaderContainer>

      <DownloadAssetsContainer color="#FFF">
        <PodhouseDark />
      </DownloadAssetsContainer>
    </DownloadItemContainer>

    <DownloadItemContainer>
      <DownloadHeaderContainer>
        <Heading
          color="#101010"
          as="h2"
          fontSize={36}
          letterSpacing="-0.03em"
          textAlign="center"
          fontWeight="600"
        >
          Light
        </Heading>

        <Link
          href="/logo/light.zip"
          download
          color="#101010"
          fontSize={16}
          lineHeight="30px"
          fontWeight="400"
        >
          download
        </Link>
      </DownloadHeaderContainer>

      <DownloadAssetsContainer color="#101010">
        <PodhouseLight />
      </DownloadAssetsContainer>
    </DownloadItemContainer>
  </DownloadContainer>
);

export default Download;
