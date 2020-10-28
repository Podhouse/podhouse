import React from "react";

import {
  DownloadContainer,
  DownloadItemContainer,
  DownloadHeaderContainer,
  DownloadAssetsContainer,
} from "./Download.styles";

import PodhouseDark from "../../../../../public/logo/logo-medium-dark.svg";
import PodhouseWhite from "../../../../../public/logo/logo-medium-white.svg";

import Heading from "src/system/Heading/Heading";
import Link from "src/system/Link/Link";

const Download = () => (
  <DownloadContainer>
    <DownloadItemContainer>
      <DownloadHeaderContainer>
        <Heading variant="primary" size="normal" as="h2" fontSize={36}>
          Dark
        </Heading>

        <Link
          href="/logo/Dark/svg.zip"
          variant="primary"
          size="normal"
          download
        >
          .svg
        </Link>
        <Link
          href="/logo/Dark/png.zip"
          variant="primary"
          size="normal"
          download
        >
          .png
        </Link>
      </DownloadHeaderContainer>

      <DownloadAssetsContainer color="#FFF">
        <PodhouseDark />
      </DownloadAssetsContainer>
    </DownloadItemContainer>

    <DownloadItemContainer>
      <DownloadHeaderContainer>
        <Heading variant="primary" size="normal" as="h2" fontSize={36}>
          Light
        </Heading>

        <Link
          href="/logo/White/svg.zip"
          variant="primary"
          size="normal"
          download
        >
          .svg
        </Link>
        <Link
          href="/logo/White/png.zip"
          variant="primary"
          size="normal"
          download
        >
          .png
        </Link>
      </DownloadHeaderContainer>

      <DownloadAssetsContainer color="#000">
        <PodhouseWhite />
      </DownloadAssetsContainer>
    </DownloadItemContainer>
  </DownloadContainer>
);

export default Download;
