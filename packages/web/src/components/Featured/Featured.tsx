import React from "react";

import {
  FeaturedContainer,
  FeaturedAvatar,
  FeaturedDetailsContainer,
  FeaturedName,
  FeaturedAuthor,
  FeaturedDescription,
  FeaturedBadge,
} from "./Featured.styles";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const Featured = () => {
  return (
    <FeaturedContainer>
      <a href="/app/podcast/invisible">
        <FeaturedAvatar src={avatar} />
      </a>

      <FeaturedDetailsContainer>
        <FeaturedBadge
          href="/advertisers"
          target="_blank"
          rel="noopener noreferrer"
        >
          FEATURED
        </FeaturedBadge>

        <FeaturedName href="/app/podcast/invisible">99% Invisible</FeaturedName>
        <FeaturedAuthor>Roman Mars</FeaturedAuthor>
        <FeaturedDescription>
          Design is everywhere in our lives, perhaps most importantly in the
          places where we've just stopped noticing. 99% Invisible is a weekly
          exploration of the process and power of design and architecture. From
          award winning producer Roman Mars. Learn more at
          99percentinvisible.org. A proud member of Radiotopia, from PRX. Learn
          more at radiotopia.fm. Design is everywhere in our lives, perhaps most
          importantly in the places where we've just stopped noticing. 99%
          Invisible is a weekly exploration of the process and power of design
          and architecture.
        </FeaturedDescription>
      </FeaturedDetailsContainer>
    </FeaturedContainer>
  );
};

export default Featured;
