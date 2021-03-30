import styled from "@emotion/styled";
import ClampLines from "react-clamp-lines";

export const PodcastInfoContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 20px;
  padding: 20px 20px 0px 20px;
  margin: 0 auto;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, max-content);
    grid-column-gap: 20px;
    padding: 20px 20px 0px 20px;
  }
`;

export const PodcastInfoHeader = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: grid;
  grid-template-rows: 200px max-content 40px 40px;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: max-content 40px;
    grid-gap: 20px;

    .img {
      justify-self: center;
    }
  }
`;

export const PodcastInfoDetailsContainer = styled.div`
  width: auto;
  height: auto;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  align-items: center;
  justify-items: center;

  @media screen and (min-width: 800px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    grid-template-rows: repeat(3, max-content);
    align-items: flex-start;
    justify-items: flex-start;
  }
`;

export const PodcastInfoDescription = styled(ClampLines)`
  font-size: 16px;
  line-height: 30px;
  font-weight: 300;
`;

export const PodcastInfoButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 800px) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PodcastInfoShareButton = styled.button`
  display: none;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-rows: 1fr;
    grid-columns-gap: 10px;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
    width: 70px;
    height: auto;
    color: #b7b7b7;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const PodcastInfoItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fill, 140px);
  grid-template-rows: auto-fill;
  grid-gap: 20px;
  justify-content: center;
  @media screen and (min-width: 800px) {
    justify-content: flex-start;
  }
`;

export const PodcastInfoLinksContainer = styled.div`
  grid-row: 4 / 5;
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: max-content max-content 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
  }
`;

export const PodcastInfoLinkContainer = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    width: auto;
    height: auto;
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-rows: 1fr;
    grid-column-gap: 4px;
    align-items: center;
  }
`;

export const PodcastInfoSearchInputContainer = styled.form`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  @media screen and (min-width: 800px) {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    width: 100%;
    max-width: 400px;
    justify-self: end;
  }
`;
