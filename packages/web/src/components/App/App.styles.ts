import { styled } from "../../system/theme";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 70px 1fr 120px;
    grid-template-columns: 230px 1fr;
  }
`;
