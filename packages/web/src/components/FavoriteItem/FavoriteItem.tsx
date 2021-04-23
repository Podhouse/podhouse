import React from "react";
import { Divider } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsPlay } from "react-icons/bs";

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
  description: string;
  datePublished: number;
  duration: number;
}

const FavoriteItem = ({
  id,
  image,
  title,
  description,
  datePublished,
  duration,
}: Props) => {
  return (
    <FavoriteItemContainer>
      <FavoriteNameDescription>
        <FavoriteItemName
          as={ReactRouterLink}
          to={{ pathname: `/episode/${id}`, state: { id } }}
          fontSize="16px"
          fontWeight="500"
        >
          {title}
        </FavoriteItemName>

        <FavoriteItemDescription
          fontSize="16px"
          fontWeight="300"
          lineHeight="30px"
        >
          {description}
        </FavoriteItemDescription>
      </FavoriteNameDescription>

      <FavoriteItemPublishedDate
        fontSize="16px"
        fontWeight="300"
        lineHeight="30px"
        textAlign="start"
      >
        {formatDate(datePublished)}
      </FavoriteItemPublishedDate>

      <FavoriteItemDuration
        fontSize="16px"
        fontWeight="300"
        lineHeight="30px"
        textAlign="start"
      >
        {formatTime(duration)}
      </FavoriteItemDuration>

      <FavoriteItemButton
        type="button"
        width="90px"
        leftIcon={<BsPlay size={16} />}
      >
        Play
      </FavoriteItemButton>

      <FavoriteDividerContainer>
        <Divider />
      </FavoriteDividerContainer>
    </FavoriteItemContainer>
  );
};

export default FavoriteItem;
