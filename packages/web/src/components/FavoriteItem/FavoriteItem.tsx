import React from "react";
import { Divider, Image, Stack, Text, Box, IconButton } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsHeart, BsListUl, BsPlay } from "react-icons/bs";

import {
  FavoriteItemContainer,
  FavoriteItemName,
  FavoriteItemDescription,
  FavoriteNameDescription,
  FavoriteItemPublishedDate,
  FavoriteItemDuration,
  FavoriteItemButton,
  FavoriteDividerContainer,
} from "./FavoriteItem.styles";

import { formatTime, formatDate } from "src/utils/";

interface Props {
  id: number;
  image: string;
  title: string;
  author: string;
  datePublished: number;
  duration: number;
}

const FavoriteItem = ({
  id,
  image,
  title,
  author,
  datePublished,
  duration,
}: Props) => {
  return (
    <FavoriteItemContainer>
      <Box width="60px" height="60px" bgColor="black" />

      <Stack direction="column" spacing="0px">
        <Text
          as={ReactRouterLink}
          to={{ pathname: `/episode/${id}`, state: { id } }}
          fontSize="16px"
          fontWeight="500"
        >
          {title}
        </Text>

        <Text fontSize="16px" fontWeight="300" lineHeight="30px">
          {author}
        </Text>
      </Stack>

      <IconButton
        aria-label="Favorite"
        icon={<BsHeart size="16px" />}
        width="fit-content"
        variant="ghost"
      />

      <Text fontSize="16px" fontWeight="300" lineHeight="30px">
        {datePublished}
      </Text>

      <Text fontSize="16px" fontWeight="300" lineHeight="30px">
        {duration}
      </Text>

      <IconButton
        aria-label="Favorite"
        icon={<BsListUl size="16px" />}
        width="fit-content"
        variant="ghost"
      />

      <IconButton
        aria-label="Favorite"
        icon={<BsPlay size="16px" />}
        width="fit-content"
        variant="ghost"
      />
    </FavoriteItemContainer>
  );
};

export default FavoriteItem;
