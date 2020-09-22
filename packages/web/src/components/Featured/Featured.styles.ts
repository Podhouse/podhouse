import styled from "@emotion/styled";

export const FeaturedContainer = styled.div`
  width: 100%;
  height: 100px;

  @media screen and (min-width: 800px) {
    height: 200px;
  }
`;

export const FeaturedItemContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 200px;
    grid-column-gap: 20px;
  }
`;

export const FeaturedAvatar = styled.img`
  border-radius: 5px;
  cursor: pointer;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  align-self: center;
  justify-self: center;
  object-fit: cover;
`;

export const FeaturedDetailsContainer = styled.div`
  width: auto;
  height: auto;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  align-items: flex-start;
  justify-items: flex-start;

  @media screen and (min-width: 800px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    grid-template-rows: repeat(3, max-content);
    align-items: flex-start;
    justify-items: flex-start;
  }
`;
