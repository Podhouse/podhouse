import { styled } from "../../../system/theme";

interface PodcastAvatarProps {
  avatar: string;
}

export const PodcastContainer = styled.div`
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

export const PodcastHeader = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: grid;
  grid-template-rows: 200px max-content 50px;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 200px 50px;
    grid-gap: 20px;
  }
`;

export const PodcastAvatar = styled.div<PodcastAvatarProps>`
  width: 200px;
  height: 200px;
  background-image: url(${({ avatar }) => avatar});
  background-size: cover;
  border-radius: 5px;
  cursor: pointer;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  align-self: center;
  justify-self: center;
`;

export const PodcastDetailsContainer = styled.div`
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
    grid-template-rows: repeat(4, max-content);
    align-items: flex-start;
    justify-items: flex-start;
  }
`;

export const PodcastPageTitle = styled.p`
  display: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.strongestGray};

  @media screen and (min-width: 800px) {
    display: block;
  }
`;

export const PodcastName = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.black};
`;

export const PodcastProdName = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.black};
`;

export const PodcastDescription = styled.p`
  display: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.strongestGray};

  @media screen and (min-width: 800px) {
    display: block;
  }
`;

export const PodcastButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 800px) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
  }
`;

export const PodcastShareButton = styled.button`
  display: none;
  width: 70px;
  height: auto;
  color: ${({ theme }) => theme.colors.black};
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
  }
`;

export const PodcastItemsContainer = styled.div`
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
