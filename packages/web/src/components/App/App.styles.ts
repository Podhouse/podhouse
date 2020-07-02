import styled from "@emotion/styled";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: -webkit-fill-available;
  display: flex;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100vh;
    min-height: -webkit-fill-available;
    display: grid;
    grid-template-rows: 80px 1fr 140px;
    grid-template-columns: 210px 1fr;
  }
`;
