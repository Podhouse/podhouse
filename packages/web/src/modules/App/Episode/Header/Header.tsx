import React from "react";
import {
  Stack,
  Heading,
  Button,
  Link,
  Image,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ExternalLink } from "react-feather";
import { useLocation } from "react-router-dom";
import { BsBoxArrowUp } from "react-icons/bs";

import ShareEpisodeModal from "src/components/Modals/ShareEpisodeModal/ShareEpisodeModal";

import {
  HeaderContainer,
  HeaderDetailsContainer,
  HeaderDescription,
  HeaderButtonsContainer,
  HeaderLinksContainer,
  HeaderLinkContainer,
} from "./Header.styles";

import { useEpisode } from "src/queries/";

type Location = {
  id: number;
};

const Header = () => {
  const { state } = useLocation<Location>();
  const { data } = useEpisode(state.id);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HeaderContainer>
        <Image
          src={data?.episode?.image}
          objectFit="cover"
          borderRadius={5}
          maxWidth="200px"
          loading="lazy"
          justifySelf="center"
        />

        <HeaderDetailsContainer>
          <Stack
            direction="row"
            spacing="10px"
            alignItems="center"
            justifyItems="center"
          >
            <Heading
              as="h1"
              fontWeight="700"
              fontSize="36px"
              letterSpacing="-0.03em"
              textAlign="start"
            >
              {data?.episode?.title}
            </Heading>

            <IconButton
              aria-label="Share podcast"
              icon={<BsBoxArrowUp size="24px" />}
              variant="ghost"
              onClick={onOpen}
            />
          </Stack>

          <Heading
            as="h2"
            fontSize="16px"
            fontWeight="500"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            {data?.episode?.author}
          </Heading>

          <HeaderDescription
            text={data ? data?.episode?.description : ""}
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
            Listen
          </Button>
        </HeaderButtonsContainer>

        <HeaderLinksContainer>
          <HeaderLinkContainer>
            <Link href={data?.episode?.link} isExternal>
              Website
            </Link>
            <ExternalLink size={14} />
          </HeaderLinkContainer>

          <HeaderLinkContainer>
            <Link href={data?.episode?.url} isExternal>
              RSS
            </Link>
            <ExternalLink size={14} />
          </HeaderLinkContainer>
        </HeaderLinksContainer>
      </HeaderContainer>

      <ShareEpisodeModal
        isOpen={isOpen}
        onClose={onClose}
        episode={data?.episode}
      />
    </>
  );
};

export default Header;
