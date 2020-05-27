import { styled } from "../../system/theme";

export const AuthModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 10;
  padding: 30px;
`;

export const AutoModalInsideContainer = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: auto;
  background: white;
  border-radius: 5px;
  position: absolute;
`;

export const AuthModalLinkContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.lighestGray};

    a {
      color: ${({ theme }) => theme.colors.black};
      cursor: pointer;
    }
  }
`;

export const AuthModalLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.strongestGray};
  text-decoration: none;
`;
