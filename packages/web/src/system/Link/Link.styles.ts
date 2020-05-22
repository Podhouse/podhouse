import { styled } from "../theme";

const StyledLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
