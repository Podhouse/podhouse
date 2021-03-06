import styled from "@emotion/styled";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 80px 80px;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100vh;
    min-height: -webkit-fill-available;
    display: grid;
    grid-template-rows: 80px 1fr 120px;
    grid-template-columns: 230px 1fr;
    overflow: hidden;
  }
`;
