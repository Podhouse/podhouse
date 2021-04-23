import React from "react";
import { Divider, Image, Stack, Text, Box, IconButton } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsHeart, BsThreeDots, BsPlay } from "react-icons/bs";

import {
  FavoriteItemContainer,
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
      <Image
        width="60px"
        height="60px"
        src={image}
        loading="lazy"
        objectFit="cover"
        borderRadius="5px"
      />

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
        aria-label="Play episode"
        icon={<BsHeart size="20px" />}
        variant="ghost"
        width="fit-content"
      />

      <Text fontSize="16px" fontWeight="300" lineHeight="30px">
        {formatDate(datePublished)}
      </Text>

      <Text fontSize="16px" fontWeight="300" lineHeight="30px">
        {formatTime(duration)}
      </Text>

      <IconButton
        aria-label="Options"
        icon={<BsThreeDots size="30px" />}
        variant="ghost"
        width="fit-content"
      />

      <IconButton
        aria-label="Play episode"
        icon={<BsPlay size="30px" />}
        variant="ghost"
        width="fit-content"
      />

      <FavoriteDividerContainer>
        <Divider />
      </FavoriteDividerContainer>
    </FavoriteItemContainer>
  );
};

export default FavoriteItem;
