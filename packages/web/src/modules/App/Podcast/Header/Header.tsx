import React from "react";
import { Heading, Button, Link, Image } from "@chakra-ui/react";
import { ExternalLink } from "react-feather";
import { useLocation } from "react-router-dom";

import { usePodcast } from "src/queries/";

import {
  HeaderContainer,
  HeaderDetailsContainer,
  HeaderDescription,
  HeaderButtonsContainer,
  HeaderLinksContainer,
  HeaderLinkContainer,
} from "./Header.styles";

type Location = {
  id: number;
};

const Header = () => {
  const { state } = useLocation<Location>();

  const { data } = usePodcast(state.id);

  return (
    <HeaderContainer>
      <Image
        src={data.feed.image}
        objectFit="cover"
        borderRadius={5}
        maxWidth="200px"
        loading="lazy"
        justifySelf="center"
      />

      <HeaderDetailsContainer>
        <Heading
          as="h1"
          fontWeight="700"
          fontSize="36px"
          letterSpacing="-0.03em"
          textAlign="start"
        >
          {data.feed.title}
        </Heading>

        <Heading
          as="h2"
          fontSize="16px"
          fontWeight="500"
          letterSpacing="-0.03em"
          textAlign="start"
        >
          {data.feed.author}
        </Heading>

        <HeaderDescription
          text={data.feed.description}
          id="podcast-info-description"
          lines={3}
          ellipsis="..."
          moreText="Read more"
          className="custom-class"
          innerElement="p"
        />
      </HeaderDetailsContainer>

      <HeaderButtonsContainer>
        <Button type="button" width="100%">
          Subscribe
        </Button>
      </HeaderButtonsContainer>

      <HeaderLinksContainer>
        <HeaderLinkContainer>
          <Link href="/" isExternal>
            Website
          </Link>
          <ExternalLink size={14} />
        </HeaderLinkContainer>

        <HeaderLinkContainer>
          <Link href="/" isExternal>
            RSS
          </Link>
          <ExternalLink size={14} />
        </HeaderLinkContainer>
      </HeaderLinksContainer>
    </HeaderContainer>
  );
};

export default Header;
