import React from "react";
import {
  Box,
  Alert,
  Code,
  Heading,
  Link,
  Text,
  Divider,
  UnorderedList,
  OrderedList,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link {...props} />
      </NextLink>
    );
  }

  return <Link isExternal {...props} />;
};

const Quote = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "blue.50",
    dark: "blue.900",
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const MDXComponents = {
  h1: (props) => (
    <Heading
      color="#101010"
      as="h1"
      fontSize={36}
      letterSpacing="-0.03em"
      textAlign="start"
      fontWeight="600"
      {...props}
    />
  ),
  h2: (props) => (
    <Heading
      color="#101010"
      as="h2"
      fontSize={36}
      letterSpacing="-0.03em"
      textAlign="start"
      fontWeight="600"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading
      color="#101010"
      as="h3"
      fontSize={36}
      letterSpacing="-0.03em"
      textAlign="start"
      fontWeight="600"
      {...props}
    />
  ),
  h4: (props) => (
    <Heading
      color="#101010"
      as="h4"
      fontSize={36}
      letterSpacing="-0.03em"
      textAlign="start"
      fontWeight="600"
      {...props}
    />
  ),
  h5: (props) => (
    <Heading
      color="#101010"
      as="h5"
      fontSize={36}
      letterSpacing="-0.03em"
      textAlign="start"
      fontWeight="600"
      {...props}
    />
  ),
  h6: (props) => (
    <Heading
      color="#101010"
      as="h6"
      fontSize={36}
      letterSpacing="-0.03em"
      textAlign="start"
      fontWeight="600"
      {...props}
    />
  ),
  inlineCode: (props) => (
    <Code
      fontSize={14}
      fontWeight="600"
      bgColor="#F3F3F3"
      color="#6F6F6F"
      borderRadius="2px"
      pl={1}
      pr={1}
      {...props}
    />
  ),
  br: (props) => <Box height="20px" {...props} />,
  hr: (props) => <Divider orientation="horizontal" {...props} />,
  a: CustomLink,
  p: (props) => (
    <Text
      color="#6F6F6F"
      fontSize={16}
      lineHeight="30px"
      fontWeight="300"
      textAlign="start"
      {...props}
    />
  ),
  ul: (props) => <UnorderedList {...props} />,
  ol: (props) => <OrderedList {...props} />,
  li: (props) => <ListItem {...props} />,
  blockquote: Quote,
};

export { CustomLink };

export default MDXComponents;
