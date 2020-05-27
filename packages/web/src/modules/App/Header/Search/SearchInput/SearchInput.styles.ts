import { styled } from "../../../../../system/theme";

export const SearchInputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchInputStyled = styled.input`
  width: 100%;
  max-width: 345px;
  height: 40px;
  box-sizing: border-box;
  padding-left: 45px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.strongestGray};
  background: ${({ theme }) => theme.colors.lighestGray};
  border: none;
  border-radius: 5px;
  outline: none;

  :-moz-placeholder {
    /* Firefox 18- */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.midGray};
  }
`;
