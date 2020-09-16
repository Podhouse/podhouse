import React from "react";

import {
  DownloadContainer,
  DownloadItemContainer,
  DownloadHeaderContainer,
  DownloadAssetsContainer,
} from "./Download.styles";

import { LandingSubTitle } from "src/components/Landing/Landing.styles";

import PodhouseDark from "../../../../../public/logo/logo-medium-dark.svg";
import PodhouseWhite from "../../../../../public/logo/logo-medium-white.svg";

import Link from "src/system/Link/Link";

const Download = () => (
  <DownloadContainer>
    <DownloadItemContainer>
      <DownloadHeaderContainer>
        <LandingSubTitle>Dark</LandingSubTitle>

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
        <LandingSubTitle>White</LandingSubTitle>

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
