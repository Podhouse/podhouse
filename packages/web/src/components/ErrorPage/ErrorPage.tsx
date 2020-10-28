import React from "react";
import NextLink from "next/link";

import {
  ErrorPageContainer,
  ErrorPageInnerContainer,
} from "./ErrorPage.styles";

import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";
import Link from "src/system/Link/Link";

interface ErrorPageProps {
  title: string;
  description: string;
}

const ErrorPage = ({ title, description }: ErrorPageProps) => (
  <ErrorPageContainer>
    <ErrorPageInnerContainer>
      <Heading as="h1" variant="primary" size="big">
        {title}
      </Heading>
      <Paragraph variant="primary" size="normal">
        {description}
      </Paragraph>

      <NextLink href="/app">
        <Link href="/app" variant="primary" size="big">
          Back to home
        </Link>
      </NextLink>
    </ErrorPageInnerContainer>
  </ErrorPageContainer>
);

export default ErrorPage;
