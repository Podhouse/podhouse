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

const Podcasters = () => {
  return (
    <Stack direction="column" spacing="10px">
      <Heading as="h2" fontSize={20} textAlign="start">
        Podcasters
      </Heading>

      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How can I feature my podcast on Podhouse?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Shoot us an email at{" "}
            <Link
              target="_blank"
              rel="noopener"
              href="mailto:podhouse@podhouse.app?subject=I%20want%20to%20feature%20my%20podcast%20on%20Podhouse"
            >
              podhouse@podhouse.app
            </Link>{" "}
            to feature your podcast on Podhouse. We're building a feature where
            podcast creators will be able to feature their podcasts on Podhouse
            very easily, choosing the feature plan and many more options.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How long my podcast will be featured on Podhouse?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Your podcast will be featured for 30 days from the date of purchase.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What are the terms for featuring my podcast on Podhouse?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            All sales are final. No refunds. The price and quantity of ads sold
            may change at any time. Your podcast must be approved before it goes
            live, it usually occurs within 24 hours. We reserve the right to
            reject a podcast to be featured for any reasons such as billing
            issues, miscategorization, quality concerns, or content.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default Podcasters;
