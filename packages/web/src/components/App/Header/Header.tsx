import React, { Suspense } from "react";
import { Skeleton } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { mode } from "@chakra-ui/theme-tools";

import Navigation from "./Navigation/Navigation";
import Settings from "./Settings/Settings";

import ErrorLoginFallback from "src/components/ErrorLoginFallback/ErrorLoginFallback";

import { HeaderContainer, SkeletonContainer } from "./Header.styles";

const Header = () => (
  <HeaderContainer>
    <Navigation />
    <ErrorBoundary FallbackComponent={ErrorLoginFallback}>
      <Suspense
        fallback={
          <SkeletonContainer>
            <Skeleton
              height="20px"
              width="20px"
              startColor="#E2E8F0"
              endColor="#E2E8F0"
              borderRadius={3}
            />
          </SkeletonContainer>
        }
      >
        <Settings />
      </Suspense>
    </ErrorBoundary>
  </HeaderContainer>
);

export default Header;
