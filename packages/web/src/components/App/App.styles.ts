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
    grid-template-rows: 70px 1fr 100px;
    grid-template-columns: 210px 1fr;
    overflow: hidden;
  }
`;
