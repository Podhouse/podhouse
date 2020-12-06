import React, { Suspense } from "react";
import { Skeleton } from "@chakra-ui/react";

import { HeaderContainer, SkeletonContainer } from "./Header.styles";

import Search from "./Search/Search";
import Settings from "./Settings/Settings";

const Header = () => (
  <HeaderContainer>
    <Search />
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
  </HeaderContainer>
);

export default Header;
