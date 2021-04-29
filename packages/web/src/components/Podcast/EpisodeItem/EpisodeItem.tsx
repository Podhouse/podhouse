import React from "react";
import {
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
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

interface Props {
  episode: Episode;
}

const EpisodeItem = ({ episode }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <EpisodeItemContainer>
        <EpisodeNameDescription>
          <EpisodeItemName
            as={ReactRouterLink}
            to={{
              pathname: `/episode/${episode.id}`,
              state: { id: episode.id },
            }}
          >
            {episode.title}
          </EpisodeItemName>

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
          <Divider />
        </EpisodeDividerContainer>
      </EpisodeItemContainer>

      <ShareEpisodeModal isOpen={isOpen} onClose={onClose} episode={episode} />
    </>
  );
};

export default EpisodeItem;
