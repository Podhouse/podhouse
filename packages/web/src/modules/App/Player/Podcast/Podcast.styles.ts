import { styled } from "../../../../system/theme";

interface PodcastAvatarProps {
  avatar: string;
}

export const PodcastContainer = styled.div`
  width: 50px;
  height: 50px;
  align-self: center;
  justify-self: center;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  z-index: 10;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: 75px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
  }
`;

export const PodcastAvatar = styled.div<PodcastAvatarProps>`
  width: 40px;
  height: 40px;
  background-image: url(${({ avatar }) => avatar});
  background-size: cover;
  border-radius: 5px;

  @media screen and (min-width: 800px) {
    width: 60px;
    height: 60px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    align-self: center;
    justify-self: center;
  }
`;

export const PodcastDetails = styled.div`
  display: none;

  @media screen and (min-width: 1020px) {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
    align-self: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const PodcastEpisode = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const PodcastName = styled.h1`
  display: flex;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.midGray};
  cursor: pointer;
`;
