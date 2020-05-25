import { styled } from "../../system/theme";

export const LandingContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 120px;
  align-items: center;
  justify-items: center;
  padding: 30px;
`;

export const LandingChildrenContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 120px;
`;

export const LandingGridContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 30px;
  align-items: center;
  justify-items: center;
`;

export const LandingGridContentContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 20px;
`;

export const LandingTitle = styled.h1`
  max-width: 600px;
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 55px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 800px) {
    font-size: 48px;
  }
`;

export const LandingSubTitle = styled.h3`
  max-width: 600px;
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 800px) {
    font-size: 36px;
  }
`;

export const LandingParagraph = styled.p`
  max-width: 600px;
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.strongestGray};
`;
