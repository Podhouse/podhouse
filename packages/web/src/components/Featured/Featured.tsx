import React, { useState, useRef, useEffect } from "react";
import { Heading, Badge, Text, Image } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  FeaturedContainer,
  FeaturedItemContainer,
  FeaturedDetailsContainer,
} from "./Featured.styles";

import { FeaturedProps, FeaturedPodcast } from "./Featured.types";

const Featured = ({ featured }: FeaturedProps) => {
  const [pause, setPause] = useState<boolean>(false);
  const timer = useRef<any>();
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    duration: 7000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    //@ts-ignore
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    //@ts-ignore
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 7000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <>
      <FeaturedContainer ref={sliderRef} className="keen-slider">
        {featured.map(
          ({ id, avatar, name, author, description }: FeaturedPodcast) => (
            <FeaturedItemContainer
              key={id}
              className="keen-slider__slide number-slide1"
            >
              <ReactRouterLink to="/podcast/invisible">
                <Image
                  borderRadius={5}
                  src={avatar}
                  objectFit="cover"
                  alt="Podcast featured"
                />
                ;
              </ReactRouterLink>

              <FeaturedDetailsContainer>
                <Badge>Featured</Badge>

                <Heading
                  as={ReactRouterLink}
                  letterSpacing="-0.03em"
                  to="/podcast/invisible"
                >
                  {name}
                </Heading>
                <Heading as="h2" size="sm" letterSpacing="-0.03em">
                  {author}
                </Heading>
                <Text lineHeight="25px">{description}</Text>
              </FeaturedDetailsContainer>
            </FeaturedItemContainer>
          )
        )}
      </FeaturedContainer>
    </>
  );
};

export default Featured;
