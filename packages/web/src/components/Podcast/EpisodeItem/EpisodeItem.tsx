import React from "react";
import {
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsPlay, BsThreeDots } from "react-icons/bs";

import ShareEpisodeModal from "src/components/Modals/ShareEpisodeModal/ShareEpisodeModal";

import {
  EpisodeItemContainer,
  EpisodeItemName,
  EpisodeItemDescription,
  EpisodeNameDescription,
  EpisodeItemPublishedDate,
  EpisodeItemDuration,
  EpisodeMenuButton,
  EpisodeItemButton,
  EpisodeDividerContainer,
} from "./EpisodeItem.styles";

import { formatTime, formatDate } from "src/utils/";

import { Episode } from "src/queries/types";

import useColor from "src/hooks/useColor";

interface Props {
  episode: Episode;
}

const EpisodeItem = ({ episode }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <EpisodeItemContainer>
        <EpisodeNameDescription>
          <ChakraLink
            to={{
              pathname: `/episode/${episode.id}`,
              state: { id: episode.id },
            }}
            href={`/episode/${episode.id}`}
            as={ReactRouterLink}
            color={useColor("#e7e7e7", "#6F6F6F")}
          >
            {episode.title}
          </ChakraLink>

          <EpisodeItemDescription>{episode.description}</EpisodeItemDescription>
        </EpisodeNameDescription>

        <EpisodeItemPublishedDate>
          {formatDate(episode.datePublished)}
        </EpisodeItemPublishedDate>

        <EpisodeItemDuration>
          {formatTime(episode.duration)}
        </EpisodeItemDuration>

        <EpisodeMenuButton>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              variant="light"
              icon={<BsThreeDots size="30px" />}
              alignSelf="center"
            />
            <MenuList>
              <MenuItem>Play next</MenuItem>
              <MenuItem>Play last</MenuItem>
              <MenuItem>Mark as played</MenuItem>
              <MenuItem onClick={onOpen}>Share</MenuItem>
            </MenuList>
          </Menu>
        </EpisodeMenuButton>

        <EpisodeItemButton
          aria-label="Play episode"
          icon={<BsPlay size="30px" />}
          variant="light"
        />

        <EpisodeDividerContainer>
          <Divider
            orientation="horizontal"
            borderBottomWidth="1px"
            borderBottomColor={useColor("2C2E34", "#f2f2f2")}
          />
        </EpisodeDividerContainer>
      </EpisodeItemContainer>

      <ShareEpisodeModal isOpen={isOpen} onClose={onClose} episode={episode} />
    </>
  );
};

export default EpisodeItem;
