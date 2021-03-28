import styled from "@emotion/styled";

interface AssetsContainerProps {
  color: string;
}

export const DownloadContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 50px;
`;

export const DownloadItemContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 20px;
`;

export const DownloadHeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  align-items: flex-end;
  justify-items: flex-start;
`;

export const DownloadTitle = styled.h1`
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -0.03em;
  color: #101010;
  justify-self: flex-start;

  @media screen and (min-width: 800px) {
    font-size: 36px;
  }
`;

export const DownloadLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #101010;
  text-decoration: none;
`;

export const DownloadAssetsContainer = styled.div<AssetsContainerProps>`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: #f3f3f3;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${({ color }) => color};
`;
