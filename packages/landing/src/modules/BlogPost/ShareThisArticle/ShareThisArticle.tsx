import React from "react";
import { Stack, Text, Link } from "@chakra-ui/react";
import { Twitter, Linkedin, Instagram } from "react-feather";

const ShareThisArticle = () => {
  return (
    <Stack direction="column" spacing="20px" h="fit-content">
      <Text color="#101010" fontSize={16} lineHeight="30px" fontWeight="500">
        Share this article
      </Text>

      <Stack direction="row" spacing="20px">
        <Link
          href="https://twitter.com/podhouseapp"
          target="_blank"
          rel="noopener"
        >
          <Twitter cursor="pointer" color="#101010" />
        </Link>

        <Link
          href="https://www.linkedin.com/company/podhouseapp"
          target="_blank"
          rel="noopener"
        >
          <Linkedin cursor="pointer" color="#101010" />
        </Link>

        <Link
          href="https://www.instagram.com/podhouseapp/"
          target="_blank"
          rel="noopener"
        >
          <Instagram cursor="pointer" color="#101010" />
        </Link>
      </Stack>
    </Stack>
  );
};

export default ShareThisArticle;
