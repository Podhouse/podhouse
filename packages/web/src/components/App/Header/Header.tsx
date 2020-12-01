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
            startColor="#f3f3f3"
            endColor="#f3f3f3"
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
