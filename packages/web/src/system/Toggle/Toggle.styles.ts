import { styled } from "src/system/theme";

export const ToggleWrapper = styled.div`
  position: relative;
`;

export const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 20px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin: 3px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
  }
`;

export const ToggleContainer = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + ${ToggleLabel} {
    background: ${({ theme }) => theme.colors.black};

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      margin-left: 27px;
      transition: 0.3s;
    }
  }
`;
