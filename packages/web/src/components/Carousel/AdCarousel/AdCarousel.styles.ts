import { styled } from "../../../system/theme";

interface CarouselItemProps {
  img: string;
}

export const AdCarouselContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;

  .carousel-container {
    width: 100%;
    height: 100%;
  }
`;

export const AdCarouselItem = styled.img<CarouselItemProps>`
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  border: none;
  cursor: pointer;
`;
