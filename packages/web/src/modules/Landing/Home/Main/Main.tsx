import React from "react";
import { useRouter } from "next/router";

import Button from "src/system/Button/Button";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";

const Main = () => {
  const router = useRouter();

  const handleStart = (e) => {
    e.preventDefault();
    router.push("/app");
  };

  return (
    <LandingGridContainer>
      <LandingGridContentContainer>
        <Heading variant="primary" size="normal" as="h1" fontSize={64}>
          Listen to your favorite podcasts
        </Heading>
        <Paragraph variant="secondary" size="normal">
          A powerful, clean, and intuitive app for you to discover and explore
          podcasts everywhere, anytime with the best podcast experience.
        </Paragraph>
      </LandingGridContentContainer>

      <Button
        type="button"
        variant="primary"
        size="big"
        onClick={handleStart}
        width={200}
      >
        Listen now for free
      </Button>
    </LandingGridContainer>
  );
};

export default Main;
