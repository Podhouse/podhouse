import React from "react";
import { withTranslation } from "i18n";
import { WithTranslation } from "next-i18next";
import NextLink from "next/link";
import { Home, Headphones, Search, User, Heart } from "react-feather";

import {
  NavigationContainer,
  NavigationItemContainer,
} from "./Navigation.styles";

import Link from "src/system/Link/Link";

const Navigation = ({ t }: WithTranslation) => (
  <NavigationContainer>
    <NavigationItemContainer className="browse">
      <NextLink href="/app">
        <Link href="/app" variant="secondary" size="light">
          <Home size={16} strokeWidth={1.7} />
        </Link>
      </NextLink>

      <NextLink href="/app">
        <Link id="link-desktop" href="/app" variant="secondary" size="light">
          {t("browse")}
        </Link>
      </NextLink>
    </NavigationItemContainer>

    <NavigationItemContainer className="podcasts">
      <NextLink href="/app/podcasts">
        <Link href="/app/podcasts" variant="secondary" size="light">
          <Headphones size={16} strokeWidth={1.7} />
        </Link>
      </NextLink>

      <NextLink href="/app/podcasts">
        <Link
          id="link-desktop"
          href="/app/podcasts"
          variant="secondary"
          size="light"
        >
          {t("podcasts")}
        </Link>
      </NextLink>
    </NavigationItemContainer>

    <NavigationItemContainer className="favorites">
      <NextLink href="/app/favorites">
        <Link href="/app/favorites" variant="secondary" size="light">
          <Heart size={16} strokeWidth={1.7} />
        </Link>
      </NextLink>

      <NextLink href="/app/favorites">
        <Link
          id="link-desktop"
          href="/app/favorites"
          variant="secondary"
          size="light"
        >
          {t("favorites")}
        </Link>
      </NextLink>
    </NavigationItemContainer>

    <NavigationItemContainer className="search">
      <NextLink href="/app/search">
        <Link href="/app/search" variant="secondary" size="light">
          <Search size={16} strokeWidth={1.7} />
        </Link>
      </NextLink>
    </NavigationItemContainer>

    <NavigationItemContainer className="settings">
      <NextLink href="/app/settings">
        <Link href="/app/settings" variant="secondary" size="light">
          <User size={16} strokeWidth={1.7} />
        </Link>
      </NextLink>
    </NavigationItemContainer>
  </NavigationContainer>
);

Navigation.getInitialProps = async () => ({ namespacesRequired: ["menu"] });

export default withTranslation("menu")(Navigation);
