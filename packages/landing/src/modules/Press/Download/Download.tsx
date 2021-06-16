import React from "react";
import Image from "next/image";
import { Heading, Link } from "@chakra-ui/react";

import {
  DownloadContainer,
  DownloadItemContainer,
  DownloadHeaderContainer,
  DownloadAssetsContainer,
} from "./Download.styles";

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
        <Image src="/images/logo/logo-dark.svg" width={80} height={80} alt="Podhouse logo dark" />
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
        <Image src="/images/logo/light-logo.svg" width={80} height={80} alt="Podhouse logo light" />
      </DownloadAssetsContainer>
    </DownloadItemContainer>
  </DownloadContainer>
);

export default Download;
