import { styled } from "../../../system/theme";

interface PodcastItemProps {
  avatar: string;
}

export const PodcastItemContainer = styled.div`
  width: 100%;
  min-width: 50px;
  max-width: 140px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 140px minmax(min-content, max-content) minmax(
      min-content,
      max-content
    );
  grid-row-gap: 10px;
  align-items: center;
  justify-items: flex-start;
`;

export const PodcastItemAvatar = styled.div<PodcastItemProps>`
  width: 140px;
  height: 140px;
  background-image: url(${({ avatar }) => avatar});
  background-size: cover;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PodcastItemTitle = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.strongestGray};
  cursor: pointer;
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const PodcastItemSubTitle = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.strongestGray};
  cursor: pointer;
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
