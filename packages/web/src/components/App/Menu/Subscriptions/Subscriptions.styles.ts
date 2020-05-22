import { styled } from "../../../../system/theme";

interface SubscriptionsAvatarProps {
  avatar: string;
}

export const SubscriptionsContainer = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    width: fit-content;
    height: auto;
    display: grid;
    grid-template-rows: 30px 1fr;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    align-items: center;
    justify-content: center;
  }
`;

export const SubscriptionsHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const SubscriptionsItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, max-content));
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  width: 100%;
  height: 100%;
  align-items: center;
  align-self: flex-start;
  justify-self: center;
  justify-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    a {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const SubscriptionsAvatar = styled.div<SubscriptionsAvatarProps>`
  width: 30px;
  height: 30px;
  background-image: url(${({ avatar }) => avatar});
  background-size: cover;
  border-radius: 3px;
  cursor: pointer;
`;

export const SubscriptionsLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.strongestGray};
  cursor: pointer;
  text-decoration: none;
  justify-self: flex-start;
`;

export const SubscriptionsTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.strongestGray};
  text-decoration: none;
  text-transform: uppercase;
  justify-self: flex-start;
`;
