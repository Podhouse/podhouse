import React from "react";
import { Heading, Text, Stack, Image } from "@chakra-ui/react";

interface Props {
  readingTime: {
    text: string;
  };
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
  ogImage: {
    url: string;
  };
}

const Header = ({ title, description, date, ogImage }: Props) => (
  <Stack direction="column" spacing="20px" maxW="800px" h="fit-content">
    <Text
      color="#6F6F6F"
      fontSize={16}
      lineHeight="30px"
      fontWeight="300"
      textAlign="center"
    >
      Published on {date}
    </Text>

    <Heading
      color="#101010"
      as="h1"
      fontSize={64}
      letterSpacing="-0.03em"
      textAlign="center"
      fontWeight="600"
    >
      {title}
    </Heading>

    <Text
      color="#6F6F6F"
      fontSize={16}
      lineHeight="30px"
      fontWeight="300"
      textAlign="center"
    >
      {description}
    </Text>

    <Image
      src={ogImage.url}
      alt="Post image"
      width="100%"
      height="400px"
      layout="responsive"
      lazy="loading"
      borderRadius="5px"
      objectFit="cover"
    />
  </Stack>
);

export default Header;
