import { styled } from "../../../system/theme";

export const MainContainer = styled.main`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
`;
