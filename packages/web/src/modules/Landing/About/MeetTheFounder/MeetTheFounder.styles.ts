import styled from "@emotion/styled";

export const MeetTheFounderContainer = styled.div`
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

export const MeetTheFounderImage = styled.picture`
  img,
  source {
    border-radius: 5px;
  }

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
