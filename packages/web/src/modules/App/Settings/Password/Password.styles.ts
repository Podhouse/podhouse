import { styled } from "../../../../system/theme";

export const PasswordFormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  justify-self: center;
  align-self: center;
`;
