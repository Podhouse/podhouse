import React from "react";
import {
  Divider,
  Image,
  Stack,
  Text,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsHeart, BsThreeDots, BsPlay } from "react-icons/bs";

import ShareEpisodeModal from "src/components/Modals/ShareEpisodeModal/ShareEpisodeModal";

import {
  FavoriteItemContainer,
  FavoriteDividerContainer,
} from "./FavoriteItem.styles";

import { formatTime, formatDate } from "src/utils/";

import { Episode } from "src/queries/types";

import useColor from "src/hooks/useColor";

interface Props {
  episode: Episode;
}

const FavoriteItem = ({ episode }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FavoriteItemContainer>
        <Image
          width="60px"
          height="60px"
          src={episode.image}
          loading="lazy"
          objectFit="cover"
          borderRadius="5px"
        />

        <Stack direction="column" spacing="0px">
          <Text
            as={ReactRouterLink}
            to={{
              pathname: `/episode/${episode.id}`,
              state: { id: episode.id },
            }}
            fontSize="16px"
            fontWeight="500"
          >
            {episode.title}
          </Text>

          <Text fontSize="16px" fontWeight="300" lineHeight="30px">
            {episode.title}
          </Text>
        </Stack>

        <IconButton
          aria-label="Play episode"
          icon={<BsHeart size="20px" />}
          variant="ghost"
          width="fit-content"
        />

        <Text fontSize="16px" fontWeight="300" lineHeight="30px">
          {formatDate(episode.datePublished)}
        </Text>

        <Text fontSize="16px" fontWeight="300" lineHeight="30px">
          {formatTime(episode.duration)}
        </Text>

        <Box alignSelf="center">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              variant="ghost"
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
        </Box>

        <IconButton
          aria-label="Play episode"
          icon={<BsPlay size="30px" />}
          variant="ghost"
          width="fit-content"
        />

        <FavoriteDividerContainer>
          <Divider
            orientation="horizontal"
            borderBottomWidth="1px"
            borderBottomColor={useColor("2C2E34", "#f2f2f2")}
          />
        </FavoriteDividerContainer>
      </FavoriteItemContainer>

      <ShareEpisodeModal isOpen={isOpen} onClose={onClose} episode={episode} />
    </>
  );
};

export default FavoriteItem;
