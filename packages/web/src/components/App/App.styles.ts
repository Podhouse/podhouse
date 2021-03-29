import styled from "@emotion/styled";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: -webkit-fill-available;
  display: flex;
  overflow: hidden;

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
