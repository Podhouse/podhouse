import * as React from "react";
import { useRouter } from "next/router";

import Button from "../../../system/Button/Button";

import {
  LandingGridContainer,
  LandingSubTitle,
  LandingParagraph,
} from "../Landing.styles";

const CTA = () => {
  const router = useRouter();

  const handleStart = (e) => {
    e.preventDefault();
    router.push("/app");
  };

  return (
    <LandingGridContainer>
      <LandingSubTitle>
        Start listen to your favorite podcasts now
      </LandingSubTitle>
      <LandingParagraph>
        Try now and listen to your podcasts freely, without having annoying ads,
        listen freely everywhere and anytime
      </LandingParagraph>
      <Button type="button" width={160} onClick={handleStart}>
        Get started
      </Button>
    </LandingGridContainer>
  );
};

export default CTA;
