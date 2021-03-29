import styled from "@emotion/styled";
import { Link } from "@chakra-ui/react";

export const RateModalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 35px);
  grid-row-gap: 5px;
  align-items: center;
  justify-content: center;
  bottom: 80px;
  width: 70px;
  height: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  background: #fff;
  border-radius: 5px;
  right: 135px;
  position: absolute;
  align-self: flex-end;
  z-index: 2;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
`;

export const RateModalLinkContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    background: #f3f3f3;

    a {
      color: #101010;
    }
  }
`;

export const RateModalLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-decoration: none;
`;
