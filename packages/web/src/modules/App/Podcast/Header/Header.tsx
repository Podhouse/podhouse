import React from "react";
import {
  Stack,
  Heading,
  Button,
  Image,
  Text,
  IconButton,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsBoxArrowUp, BsBoxArrowUpRight } from "react-icons/bs";
import ClampLines from "react-clamp-lines";

import SharePodcastModal from "src/components/Modals/SharePodcastModal/SharePodcastModal";

import {
  HeaderContainer,
  HeaderDetailsContainer,
  HeaderButtonsContainer,
  HeaderLinksContainer,
  HeaderLinkContainer,
} from "./Header.styles";

import { usePodcast } from "src/queries/";

type Location = {
  id: number;
};

const Header = () => {
  const { state } = useLocation<Location>();
  const { data } = usePodcast(state.id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <HeaderContainer>
        <Image
          src={data?.feed?.image}
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
              fontSize="36px"
              letterSpacing="-0.03em"
              textAlign="start"
            >
              {data?.feed?.title}
            </Heading>

            <IconButton
              aria-label="Share podcast"
              icon={<BsBoxArrowUp size="24px" />}
              variant="light"
              onClick={onOpen}
            />
          </Stack>

          <Heading
            as="h2"
            variant="light"
            fontSize="16px"
            fontWeight="500"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            {data?.feed?.author}
          </Heading>

          <Text
            as={ClampLines}
            text={data ? data?.feed?.description : ""}
            id="podcast-info-description"
            lines={3}
            ellipsis="..."
            moreText="Read more"
            className="custom-class"
            innerElement="p"
          />
        </HeaderDetailsContainer>

        <HeaderButtonsContainer>
          <Button
            type="button"
            width="100%"
            variant="main"
            onClick={toggleColorMode}
          >
            Subscribe
          </Button>
        </HeaderButtonsContainer>

        <HeaderLinksContainer>
          <HeaderLinkContainer>
            <Button
              variant="light"
              as={ReactRouterLink}
              to={`${data?.feed?.link}`}
              leftIcon={<BsBoxArrowUpRight size={16} />}
              w="100%"
              h="100%"
              justifyContent="flex-start"
            >
              Website
            </Button>

            <Button
              variant="light"
              as={ReactRouterLink}
              to={`${data?.feed?.url}`}
              leftIcon={<BsBoxArrowUpRight size={16} />}
              w="100%"
              h="100%"
              justifyContent="flex-start"
            >
              RSS
            </Button>
          </HeaderLinkContainer>
        </HeaderLinksContainer>
      </HeaderContainer>

      <SharePodcastModal
        isOpen={isOpen}
        onClose={onClose}
        podcast={data?.feed}
      />
    </>
  );
};

export default Header;
