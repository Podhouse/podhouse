import React from "react";
import { useRouter } from "next/router";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "../Landing.styles";

import Button from "src/system/Button/Button";
import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";

const CallToAction = () => {
  const router = useRouter();

  const handleStart = (e) => {
    e.preventDefault();
    router.push("/app");
  };

  return (
    <LandingGridContainer>
      <LandingGridContentContainer>
        <Heading variant="primary" size="normal" as="h2" fontSize={36}>
          Totally yours
        </Heading>
        <Paragraph variant="secondary" size="normal">
          Although there are some premium features planned, we will always be
          free. You won't need to pay anything in order to listen to your
          favorite podcasts with us
        </Paragraph>
      </LandingGridContentContainer>

      <Button
        type="button"
        variant="primary"
        size="normal"
        onClick={handleStart}
        width={120}
      >
        Get started
      </Button>
    </LandingGridContainer>
  );
};

export default CallToAction;
