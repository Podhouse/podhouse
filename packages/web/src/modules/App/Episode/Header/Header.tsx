import React from "react";
import {
  Stack,
  Heading,
  Button,
  Text,
  Image,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsBoxArrowUp, BsBoxArrowUpRight } from "react-icons/bs";
import ClampLines from "react-clamp-lines";

import ShareEpisodeModal from "src/components/Modals/ShareEpisodeModal/ShareEpisodeModal";

import {
  HeaderContainer,
  HeaderDetailsContainer,
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
            <Heading as="h1" fontSize="36px" textAlign="start">
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

          <Text
            as={ClampLines}
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
          <Button type="button" variant="main" width="100%">
            Listen
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

      <ShareEpisodeModal
        isOpen={isOpen}
        onClose={onClose}
        episode={data?.episode}
      />
    </>
  );
};

export default Header;
