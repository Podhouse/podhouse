import React from "react";

import {
  DownloadContainer,
  DownloadItemContainer,
  DownloadHeaderContainer,
  DownloadTitle,
  DownloadLink,
  DownloadAssetsContainer,
} from "./Download.styles";

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

      <DownloadAssetsContainer color="#FFF" />
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

      <DownloadAssetsContainer color="#000" />
    </DownloadItemContainer>
  </DownloadContainer>
);

export default Download;
