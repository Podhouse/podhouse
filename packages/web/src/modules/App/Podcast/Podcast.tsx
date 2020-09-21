import React from "react";
import Head from "next/head";
import { withTranslation } from "i18n";
import Scrollbars from "react-custom-scrollbars";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";

import {
  PodcastContainer,
  PodcastHeader,
  PodcastAvatar,
  PodcastDetailsContainer,
  PodcastButtonsContainer,
  PodcastEpisodesContainer,
  PodcastLinksContainer,
  PodcastLinkContainer,
  PodcastSearchInputContainer,
} from "./Podcast.styles";

import EpisodeItem from "src/components/Podcast/EpisodeItem/EpisodeItem";

import Button from "src/system/Button/Button";
import InputWithLeftIcon from "src/system/InputWithLeftIcon/InputWithLeftIcon";
import Heading from "src/system/Heading/Heading";
import Link from "src/system/Link/Link";
import Paragraph from "src/system/Paragraph/Paragraph";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const episode = {
  avatar,
  name: "A Fantasy of Fashion: Articles of Interest #7",
  description:
    "In the wake of World War II, the government of France commissioned its most prominent designers to create a collection of miniature fashion dolls. It might seem like an odd thing to fund, but the fantasy of high fashion inspired hope in postwar Paris. These dolls also...",
  publishedDate: "May 12, 2020",
  duration: "39min",
};

interface SearchPodcastProps {
  podcast: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string(),
});

const Podcast = ({ t }: any) => {
  const { register, handleSubmit } = useForm<SearchPodcastProps>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <Head>
        <title>99% Invisible</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PodcastContainer>
        <PodcastHeader>
          <PodcastAvatar src={avatar} />

          <PodcastDetailsContainer>
            <Heading as="h1" variant="primary" size="normal">
              99% Invisible
            </Heading>
            <Heading as="h2" variant="primary" size="small" fontSize={16}>
              Roman Mars
            </Heading>
            <Paragraph variant="secondary" size="normal" textAlign="start">
              Design is everywhere in our lives, perhaps most importantly in the
              places where we've just stopped noticing. 99% Invisible is a
              weekly exploration of the process and power of design and
              architecture. From award winning producer Roman Mars. Learn more
              at 99percentinvisible.org. A proud member of Radiotopia, from PRX.
              Learn more at radiotopia.fm.
            </Paragraph>
          </PodcastDetailsContainer>

          <PodcastButtonsContainer>
            <Button type="button" variant="primary" size="normal">
              {t("subscribe")}
            </Button>
          </PodcastButtonsContainer>

          <PodcastLinksContainer>
            <PodcastLinkContainer>
              <Link
                variant="secondary"
                size="normal"
                href="mailto:leonardomso11@gmail.com"
                target="_blank"
                rel="noopener"
              >
                {t("website")}
              </Link>
            </PodcastLinkContainer>

            <PodcastLinkContainer>
              <Link
                variant="secondary"
                size="normal"
                href="mailto:leonardomso11@gmail.com"
                target="_blank"
                rel="noopener"
              >
                RSS
              </Link>
            </PodcastLinkContainer>

            <PodcastSearchInputContainer onSubmit={handleSubmit(onSubmit)}>
              <InputWithLeftIcon
                type="text"
                name="podcast"
                variant="primary"
                scale="normal"
                placeholder={t("search-episode")}
                ref={register}
                error=""
              />
            </PodcastSearchInputContainer>
          </PodcastLinksContainer>
        </PodcastHeader>

        <PodcastEpisodesContainer>
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
        </PodcastEpisodesContainer>
      </PodcastContainer>
    </Scrollbars>
  );
};

Podcast.getInitialProps = async () => ({ namespacesRequired: ["podcast"] });

export default withTranslation("podcast")(Podcast);
