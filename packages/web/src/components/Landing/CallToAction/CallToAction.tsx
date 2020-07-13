import * as React from "react";
import { useRouter } from "next/router";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingSubTitle,
  LandingParagraph,
} from "../Landing.styles";

import Button from "src/system/Button/Button";

const CallToAction = () => {
  const router = useRouter();

  const handleStart = (e) => {
    e.preventDefault();
    router.push("/app");
  };

  return (
    <LandingGridContainer>
      <LandingGridContentContainer>
        <LandingSubTitle>
          Start listen to your favorite podcasts now
        </LandingSubTitle>
        <LandingParagraph>
          Try Podhouse now and listen to your podcasts freely, without having
          annoying ads, everywhere and anytime
        </LandingParagraph>
      </LandingGridContentContainer>

      <Button type="button" width={160} onClick={handleStart}>
        Get started
      </Button>
    </LandingGridContainer>
  );
};

export default CallToAction;
