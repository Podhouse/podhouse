import React, { useState, useRef, useEffect } from "react";
import { withTranslation } from "i18n";
import { useKeenSlider } from "keen-slider/react";
import NextLink from "next/link";

import {
  FeaturedContainer,
  FeaturedItemContainer,
  FeaturedAvatar,
  FeaturedDetailsContainer,
} from "./Featured.styles";

import Link from "src/system/Link/Link";
import Paragraph from "src/system/Paragraph/Paragraph";
import Badge from "src/system/Badge/Badge";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const Featured = ({ t }: any) => {
  const [pause, setPause] = useState(false);
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
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
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
        <FeaturedItemContainer className="keen-slider__slide number-slide1">
          <NextLink href="/app/podcast/[podcast]" as="/app/podcast/invisible">
            <FeaturedAvatar src={avatar} />
          </NextLink>

          <FeaturedDetailsContainer>
            <Badge variant="info" size="normal">
              {t("featured")}
            </Badge>

            <NextLink href="/app/podcast/[podcast]" as="/app/podcast/invisible">
              <Link variant="primary" size="big" href="/app/podcast/invisible">
                99% Invisible
              </Link>
            </NextLink>
            <Paragraph variant="primary" size="normal" textAlign="start">
              Roman Mars
            </Paragraph>
            <Paragraph variant="secondary" size="normal" textAlign="start">
              Design is everywhere in our lives, perhaps most importantly in the
              places where we've just stopped noticing. 99% Invisible is a
              weekly exploration of the process and power of design and
              architecture. From award winning producer Roman Mars. Learn more
              at 99percentinvisible.org. A proud member of Radiotopia, from PRX.
              Learn more at radiotopia.fm. Design is everywhere in our lives,
              perhaps most importantly in the places where we've just stopped
              noticing. 99% Invisible is a weekly exploration of the process and
              power of design and architecture.
            </Paragraph>
          </FeaturedDetailsContainer>
        </FeaturedItemContainer>

        <FeaturedItemContainer className="keen-slider__slide number-slide2">
          <NextLink href="/app/podcast/[podcast]" as="/app/podcast/invisible">
            <FeaturedAvatar src={avatar} />
          </NextLink>

          <FeaturedDetailsContainer>
            <Badge variant="info" size="normal">
              {t("featured")}
            </Badge>

            <NextLink href="/app/podcast/[podcast]" as="/app/podcast/invisible">
              <Link variant="primary" size="big" href="/app/podcast/invisible">
                99% Invisible
              </Link>
            </NextLink>
            <Paragraph variant="primary" size="normal" textAlign="start">
              Roman Mars
            </Paragraph>
            <Paragraph variant="secondary" size="normal" textAlign="start">
              Design is everywhere in our lives, perhaps most importantly in the
              places where we've just stopped noticing. 99% Invisible is a
              weekly exploration of the process and power of design and
              architecture. From award winning producer Roman Mars. Learn more
              at 99percentinvisible.org. A proud member of Radiotopia, from PRX.
              Learn more at radiotopia.fm. Design is everywhere in our lives,
              perhaps most importantly in the places where we've just stopped
              noticing. 99% Invisible is a weekly exploration of the process and
              power of design and architecture.
            </Paragraph>
          </FeaturedDetailsContainer>
        </FeaturedItemContainer>

        <FeaturedItemContainer className="keen-slider__slide number-slide3">
          <NextLink href="/app/podcast/[podcast]" as="/app/podcast/invisible">
            <FeaturedAvatar src={avatar} />
          </NextLink>

          <FeaturedDetailsContainer>
            <Badge variant="info" size="normal">
              {t("featured")}
            </Badge>

            <NextLink href="/app/podcast/[podcast]" as="/app/podcast/invisible">
              <Link variant="primary" size="big" href="/app/podcast/invisible">
                99% Invisible
              </Link>
            </NextLink>
            <Paragraph variant="primary" size="normal" textAlign="start">
              Roman Mars
            </Paragraph>
            <Paragraph variant="secondary" size="normal" textAlign="start">
              Design is everywhere in our lives, perhaps most importantly in the
              places where we've just stopped noticing. 99% Invisible is a
              weekly exploration of the process and power of design and
              architecture. From award winning producer Roman Mars. Learn more
              at 99percentinvisible.org. A proud member of Radiotopia, from PRX.
              Learn more at radiotopia.fm. Design is everywhere in our lives,
              perhaps most importantly in the places where we've just stopped
              noticing. 99% Invisible is a weekly exploration of the process and
              power of design and architecture.
            </Paragraph>
          </FeaturedDetailsContainer>
        </FeaturedItemContainer>
      </FeaturedContainer>
    </>
  );
};

Featured.getInitialProps = async () => ({ namespacesRequired: ["common"] });

export default withTranslation("common")(Featured);
