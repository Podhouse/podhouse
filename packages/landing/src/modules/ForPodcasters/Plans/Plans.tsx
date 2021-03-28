import React from "react";
import {
  Heading,
  Text,
  Badge,
  List,
  ListItem,
  ListIcon,
  Button,
  Stack,
} from "@chakra-ui/react";
import { BsCheck } from "react-icons/bs";
import { useRouter } from "next/router";

import { PlansContainer, PlanContainer } from "./Plans.styles";

const Plans = () => {
  const router = useRouter();

  const redirectToApp = () => {
    router.push("https://play.podhouse.app");
  };

  return (
    <Stack
      direction="column"
      spacing="20px"
      maxW="800px"
      h="fit-content"
      justifySelf="center"
      alignItems="center"
      justifyItems="center"
    >
      <Stack direction="column" spacing="20px">
        <Heading
          color="#101010"
          as="h2"
          fontSize={36}
          letterSpacing="-0.03em"
          textAlign="center"
          fontWeight="600"
        >
          The right price for your podcast
        </Heading>
        <Text
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="300"
          textAlign="center"
        >
          We have the right price for you to start to advertise your podcast
          with us and reach more listeners
        </Text>
      </Stack>

      <PlansContainer>
        <PlanContainer>
          <Badge
            width="fit-content"
            pl="2"
            pr="2"
            pt="0.5"
            pb="0.5"
            borderRadius={2}
            fontSize={14}
            fontWeight="400"
            colorScheme="blue"
          >
            Standard
          </Badge>

          <Heading
            color="#101010"
            as="h3"
            fontSize={36}
            letterSpacing="-0.03em"
            textAlign="start"
            fontWeight="600"
          >
            $99
          </Heading>

          <Text
            color="#6F6F6F"
            fontSize={16}
            lineHeight="30px"
            fontWeight="300"
            textAlign="start"
          >
            Get your podcast featured on a specific genre page and reach more
            listeners from that genre
          </Text>

          <List spacing={3}>
            <ListItem
              color="#6F6F6F"
              fontSize={16}
              lineHeight="30px"
              fontWeight="400"
              textAlign="start"
            >
              <ListIcon as={BsCheck} color="green.500" />
              Reach potential new listeners
            </ListItem>
            <ListItem
              color="#6F6F6F"
              fontSize={16}
              lineHeight="30px"
              fontWeight="400"
              textAlign="start"
            >
              <ListIcon as={BsCheck} color="green.500" />
              Featured in a specific genre
            </ListItem>
            <ListItem
              color="#6F6F6F"
              fontSize={16}
              lineHeight="30px"
              fontWeight="400"
              textAlign="start"
            >
              <ListIcon as={BsCheck} color="green.500" />
              30 days featured
            </ListItem>
          </List>

          <a
            href="mailto:leonardo@podhouse.app?subject=Advertise%20on%20Podhouse"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              width="100%"
              type="button"
              size="lg"
              onClick={redirectToApp}
              bgColor="#101010"
              color="#ffffff"
              fontWeight="400"
              _hover={{ bg: "#101010" }}
              _active={{
                bg: "#101010",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(0, 0, 0, .50), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >
              Advertise now
            </Button>
          </a>
        </PlanContainer>

        <PlanContainer>
          <Badge
            width="fit-content"
            pl="2"
            pr="2"
            pt="0.5"
            pb="0.5"
            borderRadius={2}
            fontSize={14}
            fontWeight="400"
            colorScheme="green"
          >
            Premium
          </Badge>

          <Heading
            color="#101010"
            as="h3"
            fontSize={36}
            letterSpacing="-0.03em"
            textAlign="start"
            fontWeight="600"
          >
            $499
          </Heading>

          <Text
            color="#6F6F6F"
            fontSize={16}
            lineHeight="30px"
            fontWeight="300"
            textAlign="start"
          >
            Get your podcast <strong>featured on the main page</strong> of the
            app and reach <strong>10x more listeners</strong>
          </Text>

          <List spacing={3}>
            <ListItem
              color="#6F6F6F"
              fontSize={16}
              lineHeight="30px"
              fontWeight="400"
              textAlign="start"
            >
              <ListIcon as={BsCheck} color="green.500" />
              Reach potential new listeners
            </ListItem>
            <ListItem
              color="#6F6F6F"
              fontSize={16}
              lineHeight="30px"
              fontWeight="400"
              textAlign="start"
            >
              <ListIcon as={BsCheck} color="green.500" />
              Featured in the <strong>main</strong> page
            </ListItem>
            <ListItem
              color="#6F6F6F"
              fontSize={16}
              lineHeight="30px"
              fontWeight="400"
              textAlign="start"
            >
              <ListIcon as={BsCheck} color="green.500" />
              30 days featured
            </ListItem>
          </List>

          <a
            href="mailto:leonardo@podhouse.app?subject=Advertise%20on%20Podhouse"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              width="100%"
              type="button"
              size="lg"
              onClick={redirectToApp}
              bgColor="#101010"
              color="#ffffff"
              fontWeight="400"
              _hover={{ bg: "#101010" }}
              _active={{
                bg: "#101010",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(0, 0, 0, .50), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >
              Advertise now
            </Button>
          </a>
        </PlanContainer>
      </PlansContainer>
    </Stack>
  );
};

export default Plans;
