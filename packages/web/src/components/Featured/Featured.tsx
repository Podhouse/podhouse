import React, { useState, useRef, useEffect } from "react";
import { withTranslation } from "i18n";
import { useKeenSlider } from "keen-slider/react";
import NextLink from "next/link";

import {
  FeaturedContainer,
  FeaturedItemContainer,
  FeaturedAvatar,
  FeaturedDetailsContainer,
  FeaturedEmptyAvatar,
} from "./Featured.styles";

import { FeaturedProps, FeaturedPodcast } from "./Featured.types";

import Link from "src/system/Link/Link";
import Paragraph from "src/system/Paragraph/Paragraph";
import Badge from "src/system/Badge/Badge";

const Featured = ({ featured, t }: FeaturedProps) => {
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

  const renderAvatar = (avatar: string) => {
    if (avatar === "") {
      return <FeaturedEmptyAvatar />;
    } else {
      return <FeaturedAvatar src={avatar} />;
    }
  };

  return (
    <>
      <FeaturedContainer ref={sliderRef} className="keen-slider">
        {featured.map(
          ({ id, avatar, name, author, description }: FeaturedPodcast) => (
            <FeaturedItemContainer
              key={id}
              className="keen-slider__slide number-slide1"
            >
              <NextLink
                href="/app/podcast/[podcast]"
                as="/app/podcast/invisible"
              >
                {renderAvatar(avatar)}
              </NextLink>

              <FeaturedDetailsContainer>
                <Badge variant="info" size="normal">
                  {t("featured")}
                </Badge>

                <NextLink
                  href="/app/podcast/[podcast]"
                  as="/app/podcast/invisible"
                >
                  <Link
                    variant="primary"
                    size="big"
                    href="/app/podcast/invisible"
                  >
                    {name}
                  </Link>
                </NextLink>
                <Paragraph variant="primary" size="normal" textAlign="start">
                  {author}
                </Paragraph>
                <Paragraph variant="secondary" size="normal" textAlign="start">
                  {description}
                </Paragraph>
              </FeaturedDetailsContainer>
            </FeaturedItemContainer>
          ),
        )}
      </FeaturedContainer>
    </>
  );
};

Featured.getInitialProps = async () => ({ namespacesRequired: ["common"] });

export default withTranslation("common")(Featured);
