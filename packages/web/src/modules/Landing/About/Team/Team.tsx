import * as React from "react";

import {
  TeamContainer,
  TeamInnerContainer,
  TeamHeaderContainer,
  TeamUserPictureContainer,
  TeamUserPicture,
  TeamUserNameTitle,
  TeamUserHandleTitle,
  TeamTextParagraph,
} from "./Team.styles";

import { LandingSubTitle } from "src/components/Landing/Landing.styles";

const Team = () => (
  <TeamContainer>
    <LandingSubTitle>Team</LandingSubTitle>

    <TeamInnerContainer>
      <TeamHeaderContainer>
        <TeamUserPictureContainer>
          <TeamUserPicture>
            <source srcSet="/images/leoo.webp" type="image/webp" />
            <source srcSet="/images/leoo.jpg" type="image/jpeg" />
            <img src="/images/leoo.jpg" alt="Leonardo Maldonado" />
          </TeamUserPicture>
        </TeamUserPictureContainer>

        <TeamUserNameTitle>Leonardo Maldonado</TeamUserNameTitle>
        <TeamUserHandleTitle
          href="https://twitter.com/leonardomso"
          target="_blank"
          rel="noopener noreferrer"
        >
          @leonardomso
        </TeamUserHandleTitle>
      </TeamHeaderContainer>

      <TeamTextParagraph>
        Yep, just me. I am Leonardo Maldonado, a developer living in Brazil and
        currently building the best podcast app for you to listen to your
        favorite podcasts with the best experience ever.
        <br />I worked in a few companies before launching Podhouse as a
        developer, and when I discovered podcasts, I immediately fell in love
        with podcasts. The podcast apps that I discovered never a truly nice
        experience, so I thought to create my own and have a nice experience so
        people can really enjoy listening to a podcast.
      </TeamTextParagraph>
    </TeamInnerContainer>
  </TeamContainer>
);

export default Team;
