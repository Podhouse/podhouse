import React from "react";
import NextLink from "next/link";

import {
  ErrorPageContainer,
  ErrorPageInnerContainer,
  ErrorPageTitle,
  ErrorPageText,
  ErrorPageButtonContainer,
} from "./ErrorPage.styles";

import Link from "src/system/Link/Link";

interface ErrorPageProps {
  title: string;
  description: string;
}

const ErrorPage = ({ title, description }: ErrorPageProps) => (
  <ErrorPageContainer>
    <ErrorPageInnerContainer>
      <ErrorPageTitle>{title}</ErrorPageTitle>
      <ErrorPageText>{description}</ErrorPageText>
      <ErrorPageButtonContainer>
        <NextLink href="/app">
          <Link href="" variant="primary" size="big">
            Back to home
          </Link>
        </NextLink>
      </ErrorPageButtonContainer>
    </ErrorPageInnerContainer>
  </ErrorPageContainer>
);

export default ErrorPage;
