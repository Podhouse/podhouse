import React from "react";
import { Heading, Button, Link } from "@chakra-ui/react";
import { ArrowRight } from "react-feather";

import { CTAContainer } from "./CTA.styles";

const CTA = () => {
  return (
    <CTAContainer>
      <Heading
        color="#101010"
        as="h1"
        fontSize={36}
        letterSpacing="-0.03em"
        textAlign="center"
      >
        Ready for reach more listeners?
      </Heading>

      <a
        href="mailto:leonardo@podhouse.app?subject=Advertise%20on%20Podhouse"
        target="_blank"
        rel="noreferrer"
      >
        <Button
          type="submit"
          width="200px"
          height="60px"
          fontSize="18px"
          size="lg"
          bgColor="#101010"
          color="#ffffff"
          _hover={{ bg: "#101010" }}
          _active={{
            bg: "#101010",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(0, 0, 0, .50), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          rightIcon={<ArrowRight />}
        >
          Advertise now
        </Button>
      </a>
    </CTAContainer>
  );
};

export default CTA;
