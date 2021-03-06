import React from "react";
import {
  Heading,
  Text,
  Badge,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { BsCheck } from "react-icons/bs";
import Scrollbars from "react-custom-scrollbars";

import {
  AdvertiseContainer,
  AdvertiseContainerHeaderContainer,
  PlansContainer,
  PlanContainer,
} from "./Advertise.styles";

import CTA from "./CTA/CTA";

const Advertise = () => {
  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <AdvertiseContainer>
        <AdvertiseContainerHeaderContainer>
          <Heading
            color="#101010"
            as="h1"
            fontSize={36}
            letterSpacing="-0.03em"
            textAlign="center"
          >
            Advertise on Podhouse
          </Heading>
          <Text color="#101010" lineHeight="30px" textAlign="center">
            We have the right price for you start to advertise your podcast with
            us and reach more listeners
          </Text>
        </AdvertiseContainerHeaderContainer>

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
                Featured in a specific genre page
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck} color="green.500" />
                30 days featured
              </ListItem>
            </List>
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
          </PlanContainer>
        </PlansContainer>

        <CTA />
      </AdvertiseContainer>
    </Scrollbars>
  );
};

export default Advertise;
