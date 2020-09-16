import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const MeetTheFounderContainer = styled.div<StyleProps>`
  width: 100%;
  height: auto;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-max-content;
  grid-row-gap: 30px;

  @media screen and (min-width: 800px) {
    height: 300px;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
  }
`;

export const MeetTheFounderImage = styled.div`
  width: 300px;
  height: 300px;
  background: red;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
  }
`;

export const MeetTheFounderDetailsContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 20px;

  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    align-self: center;
  }
`;

export const MeetTheFounderName = styled.h5<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: start;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.primary};
`;

export const MeetTheFounderParagraph = styled.p<StyleProps>`
  text-align: start;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  color: ${({ theme }) => theme.secondary};
`;
