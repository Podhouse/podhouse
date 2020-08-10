import React from "react";

import {
  DownloadContainer,
  DownloadItemContainer,
  DownloadHeaderContainer,
  DownloadTitle,
  DownloadLink,
  DownloadAssetsContainer,
} from "./Download.styles";

import PodhouseDark from "../../../../../public/logo/logo-medium-dark.svg";
import PodhouseWhite from "../../../../../public/logo/logo-medium-white.svg";

const Download = () => (
  <DownloadContainer>
    <DownloadItemContainer>
      <DownloadHeaderContainer>
        <DownloadTitle>Dark</DownloadTitle>

        <DownloadLink href="/logo/Dark/svg.zip" download>
          .svg
        </DownloadLink>
        <DownloadLink href="/logo/Dark/png.zip" download>
          .png
        </DownloadLink>
      </DownloadHeaderContainer>

      <DownloadAssetsContainer color="#FFF">
        <PodhouseDark />
      </DownloadAssetsContainer>
    </DownloadItemContainer>

    <DownloadItemContainer>
      <DownloadHeaderContainer>
        <DownloadTitle>White</DownloadTitle>

        <DownloadLink href="/logo/White/svg.zip" download>
          .svg
        </DownloadLink>
        <DownloadLink href="/logo/White/png.zip" download>
          .png
        </DownloadLink>
      </DownloadHeaderContainer>

      <DownloadAssetsContainer color="#000">
        <PodhouseWhite />
      </DownloadAssetsContainer>
    </DownloadItemContainer>
  </DownloadContainer>
);

export default Download;
