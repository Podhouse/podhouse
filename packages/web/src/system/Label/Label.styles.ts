import { styled } from "../theme";

interface LabelProps {
  mb?: number;
}

export const StyledLabel = styled.label<LabelProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.colors.strongestGray};
  margin-bottom: ${({ mb }) => mb}px;
  outline: none;
`;
