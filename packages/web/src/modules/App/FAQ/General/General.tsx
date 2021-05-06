import React from "react";
import {
  Stack,
  Heading,
  Box,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const General = () => {
  return (
    <Stack direction="column" spacing="10px">
      <Heading as="h2" fontSize={20} textAlign="start">
        General
      </Heading>

      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What is Podhouse?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Podcasts are spreading between internet users and more people are
            looking for audio content. Podhouse aims to help people discover new
            podcasts and listen to their favorites. Built for people who want to
            listen to podcasts combining with a nice experience.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How does Podhouse work?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Using Podhouse is very simple. You just need to open our web app and
            you're ready to listen to your favorite podcasts. You're not
            required to create an account to listen to podcasts. You'll be
            required to create an account when you want to favorite an episode
            or subscribe to a podcast.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Podhouse is an open-source project?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            We're an open-source project with all our code available on{" "}
            <Link target="_blank" href="https://github.com/Podhouse/podhouse">
              GitHub
            </Link>
            .
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Is there any premium plan on Podhouse?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            We're a free podcast app, you don't need to pay anything to listen
            to your favorite podcasts.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Where the podcasts on Podhouse come from?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            We're using the{" "}
            <Link target="_blank" href="https://podcastindex.org/">
              Podcast Index API
            </Link>{" "}
            for fetching the podcasts and episodes. In the future, we're
            planning to create our API to support additional features.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Podhouse is available on other platforms?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            We only have a web browser app for now. We're working on an iOS and
            Android version that should be released in the next months.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default General;
