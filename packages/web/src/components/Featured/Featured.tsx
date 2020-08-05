import React from "react";
import { withTranslation } from "i18n";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";

import {
  FeaturedContainer,
  FeaturedItemContainer,
  FeaturedAvatar,
  FeaturedDetailsContainer,
  FeaturedName,
  FeaturedAuthor,
  FeaturedDescription,
  FeaturedBadge,
} from "./Featured.styles";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const Featured = ({ t }: any) => {
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef<any>();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 7000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
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
          <Link href="/app/podcast/[podcast]" as="/app/podcast/invisible">
            <FeaturedAvatar src={avatar} />
          </Link>

          <FeaturedDetailsContainer>
            <FeaturedBadge
              href="/advertisers"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("featured")}
            </FeaturedBadge>

            <Link href="/app/podcast/[podcast]" as="/app/podcast/invisible">
              <FeaturedName href="/app/podcast/invisible">
                99% Invisible
              </FeaturedName>
            </Link>
            <FeaturedAuthor>Roman Mars</FeaturedAuthor>
            <FeaturedDescription>
              Design is everywhere in our lives, perhaps most importantly in the
              places where we've just stopped noticing. 99% Invisible is a
              weekly exploration of the process and power of design and
              architecture. From award winning producer Roman Mars. Learn more
              at 99percentinvisible.org. A proud member of Radiotopia, from PRX.
              Learn more at radiotopia.fm. Design is everywhere in our lives,
              perhaps most importantly in the places where we've just stopped
              noticing. 99% Invisible is a weekly exploration of the process and
              power of design and architecture.
            </FeaturedDescription>
          </FeaturedDetailsContainer>
        </FeaturedItemContainer>

        <FeaturedItemContainer className="keen-slider__slide number-slide2">
          <Link href="/app/podcast/[podcast]" as="/app/podcast/invisible">
            <FeaturedAvatar src={avatar} />
          </Link>

          <FeaturedDetailsContainer>
            <FeaturedBadge
              href="/advertisers"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("featured")}
            </FeaturedBadge>

            <Link href="/app/podcast/[podcast]" as="/app/podcast/invisible">
              <FeaturedName href="/app/podcast/invisible">
                99% Invisible
              </FeaturedName>
            </Link>
            <FeaturedAuthor>Roman Mars</FeaturedAuthor>
            <FeaturedDescription>
              Design is everywhere in our lives, perhaps most importantly in the
              places where we've just stopped noticing. 99% Invisible is a
              weekly exploration of the process and power of design and
              architecture. From award winning producer Roman Mars. Learn more
              at 99percentinvisible.org. A proud member of Radiotopia, from PRX.
              Learn more at radiotopia.fm. Design is everywhere in our lives,
              perhaps most importantly in the places where we've just stopped
              noticing. 99% Invisible is a weekly exploration of the process and
              power of design and architecture.
            </FeaturedDescription>
          </FeaturedDetailsContainer>
        </FeaturedItemContainer>

        <FeaturedItemContainer className="keen-slider__slide number-slide3">
          <Link href="/app/podcast/[podcast]" as="/app/podcast/invisible">
            <FeaturedAvatar src={avatar} />
          </Link>

          <FeaturedDetailsContainer>
            <FeaturedBadge
              href="/advertisers"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("featured")}
            </FeaturedBadge>

            <Link href="/app/podcast/[podcast]" as="/app/podcast/invisible">
              <FeaturedName href="/app/podcast/invisible">
                99% Invisible
              </FeaturedName>
            </Link>
            <FeaturedAuthor>Roman Mars</FeaturedAuthor>
            <FeaturedDescription>
              Design is everywhere in our lives, perhaps most importantly in the
              places where we've just stopped noticing. 99% Invisible is a
              weekly exploration of the process and power of design and
              architecture. From award winning producer Roman Mars. Learn more
              at 99percentinvisible.org. A proud member of Radiotopia, from PRX.
              Learn more at radiotopia.fm. Design is everywhere in our lives,
              perhaps most importantly in the places where we've just stopped
              noticing. 99% Invisible is a weekly exploration of the process and
              power of design and architecture.
            </FeaturedDescription>
          </FeaturedDetailsContainer>
        </FeaturedItemContainer>
      </FeaturedContainer>
    </>
  );
};

Featured.getInitialProps = async () => ({ namespacesRequired: ["common"] });

export default withTranslation("common")(Featured);
