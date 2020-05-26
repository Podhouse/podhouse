import React from "react";

import {
  DownloadContainer,
  DownloadItemContainer,
  DownloadHeaderContainer,
  DownloadTitle,
  DownloadLink,
  DownloadAssetsContainer,
} from "./Download.styles";

import LogoDark from "../../../../../public/logo/logo-medium-dark.svg";
import LogoWhite from "../../../../../public/logo/logo-medium-white.svg";

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
        <LogoDark />
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
        <LogoWhite />
      </DownloadAssetsContainer>
    </DownloadItemContainer>
  </DownloadContainer>
);

export default Download;
