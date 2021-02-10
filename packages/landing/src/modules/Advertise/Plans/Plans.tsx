import React from "react";
import {
  Heading,
  Text,
  Badge,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { BsCheck } from "react-icons/bs";
import { useRouter } from "next/router";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

import { PlansContainer, PlanContainer } from "./Plans.styles";

const Plans = () => {
  const router = useRouter();

  const redirectToApp = () => {
    router.push("https://play.podhouse.app");
  };

  return (
    <LandingGridContainer>
      <LandingGridContentContainer>
        <Heading
          color="#101010"
          as="h2"
          fontSize={36}
          letterSpacing="-0.03em"
          textAlign="center"
        >
          The right price for your podcast
        </Heading>
        <Text color="#101010" lineHeight="30px" textAlign="center">
          We have the right price for you to start to advertise your podcast
          with us and reach more listeners
        </Text>
      </LandingGridContentContainer>

      <PlansContainer>
        <PlanContainer>
          <Badge
            width="fit-content"
            pl="2"
            pr="2"
            pt="0.5"
            pb="0.5"
            borderRadius={2}
            fontSize="0.8em"
            colorScheme="blue"
          >
            Standard
          </Badge>

          <Heading
            color="#101010"
            as="h3"
            fontSize={48}
            letterSpacing="-0.03em"
            textAlign="start"
          >
            $99
          </Heading>

          <Text color="#101010" lineHeight="30px" textAlign="start">
            Get your podcast featured on a specific genre page and reach more
            listeners from that genre
          </Text>

          <List spacing={3}>
            <ListItem>
              <ListIcon as={BsCheck} color="green.500" />
              Reach potential new listeners
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheck} color="green.500" />
              Featured in a specific genre
            </ListItem>
            <ListItem>
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
              bgColor="#101010"
              onClick={redirectToApp}
              color="#ffffff"
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
            fontSize="0.8em"
            colorScheme="green"
          >
            Premium
          </Badge>

          <Heading
            color="#101010"
            as="h3"
            fontSize={48}
            letterSpacing="-0.03em"
            textAlign="start"
          >
            $499
          </Heading>

          <Text color="#101010" lineHeight="30px" textAlign="start">
            Get your podcast <strong>featured on the main page</strong> of the
            app and reach <strong>10x more listeners</strong>
          </Text>

          <List spacing={3}>
            <ListItem>
              <ListIcon as={BsCheck} color="green.500" />
              Reach potential new listeners
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheck} color="green.500" />
              Featured in the <strong>main</strong> page
            </ListItem>
            <ListItem>
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
              bgColor="#101010"
              onClick={redirectToApp}
              color="#ffffff"
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
    </LandingGridContainer>
  );
};

export default Plans;
