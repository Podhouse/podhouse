import React, { memo } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Image } from "@chakra-ui/react";

interface Props {
  id: number;
  image: string;
}

const PodcastItemWithAvatar = ({ id, image }: Props) => {
  return (
    <ReactRouterLink to={{ pathname: `/podcast/${id}`, state: { id } }}>
      <Image
        width="140px"
        height="140px"
        cursor="pointer"
        borderRadius="5px"
        src={image}
        alt="image"
        loading="lazy"
        objectFit="cover"
      />
    </ReactRouterLink>
  );
};

export default memo(PodcastItemWithAvatar);
