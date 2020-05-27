import * as React from "react";
import { useRouter } from "next/router";

import Button from "../../../../system/Button/Button";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingTitle,
  LandingParagraph,
} from "../../Landing.styles";

const Main = () => {
  const router = useRouter();

  const handleStart = (e) => {
    e.preventDefault();
    router.push("/app");
  };

  return (
    <LandingGridContainer>
      <LandingGridContentContainer>
        <LandingTitle>
          The best way to listen to your favorite podcasts
        </LandingTitle>
        <LandingParagraph>
          A powerful, clean, and intuitive app to listen to your favorite
          podcasts. Listen anywhere and anytime, discover and explore new
          podcasts all with an intuitive and cleaner podcast experience.
        </LandingParagraph>
      </LandingGridContentContainer>

      <Button type="button" width={160} onClick={handleStart}>
        Get started
      </Button>
    </LandingGridContainer>
  );
};

export default Main;
