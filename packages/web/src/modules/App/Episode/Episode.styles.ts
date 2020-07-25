import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const EpisodeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 20px;
  padding: 30px 30px 0px 30px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, max-content);
    grid-column-gap: 20px;
    padding: 30px 30px 0px 30px;
  }
`;

export const EpisodeHeader = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: grid;
  grid-template-rows: 200px max-content 40px;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 200px 40px;
    grid-gap: 20px;
  }
`;

export const EpisodeAvatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  align-self: center;
  justify-self: center;
`;

export const EpisodeDetailsContainer = styled.div`
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

export const EpisodeName = styled.h1<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.primary};
`;

export const EpisodeAuthor = styled.a<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.tertiary};
  text-decoration: none;
`;

export const EpisodeDescription = styled.p<StyleProps>`
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    color: ${({ theme }) => theme.tertiary};
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const EpisodeListenButtonContainer = styled.div`
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

export const EpisodeShareButton = styled.button<StyleProps>`
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
    color: ${({ theme }) => theme.tertiary};
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

export const EpisodeItemsContainer = styled.div`
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
