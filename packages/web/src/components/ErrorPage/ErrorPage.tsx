import * as React from "react";
import Link from "next/link";

import Button from "../../system/Button/Button";

import {
  ErrorPageContainer,
  ErrorPageInnerContainer,
  ErrorPageTitle,
  ErrorPageText,
  ErrorPageButtonContainer,
} from "./ErrorPage.styles";

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
        <Link href="/app">
          <a>
            <Button width={160} height={40} type="button">
              Back to home
            </Button>
          </a>
        </Link>
      </ErrorPageButtonContainer>
    </ErrorPageInnerContainer>
  </ErrorPageContainer>
);

export default ErrorPage;
