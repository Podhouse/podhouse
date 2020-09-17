import React from "react";
import Head from "next/head";
import { withTranslation } from "i18n";
import Scrollbars from "react-custom-scrollbars";
import { ExternalLink, Rss } from "react-feather";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";

import {
  PodcastContainer,
  PodcastHeader,
  PodcastAvatar,
  PodcastDetailsContainer,
  PodcastName,
  PodcastAuthor,
  PodcastDescription,
  PodcastButtonsContainer,
  PodcastEpisodesContainer,
  PodcastLinksContainer,
  PodcastLinkContainer,
  PodcastLink,
  PodcastSearchInputContainer,
} from "./Podcast.styles";

import EpisodeItem from "src/components/Podcast/EpisodeItem/EpisodeItem";

import Button from "src/system/Button/Button";
import InputWithLeftIcon from "src/system/InputWithLeftIcon/InputWithLeftIcon";
import useTheme from "src/system/useTheme";

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
  const themeState = useTheme();

  const iconColor = themeState.dark ? "#FFF" : "#B7B7B7";

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
            <PodcastName>99% Invisible</PodcastName>
            <PodcastAuthor>Roman Mars</PodcastAuthor>
            <PodcastDescription>
              Design is everywhere in our lives, perhaps most importantly in the
              places where we've just stopped noticing. 99% Invisible is a
              weekly exploration of the process and power of design and
              architecture. From award winning producer Roman Mars. Learn more
              at 99percentinvisible.org. A proud member of Radiotopia, from PRX.
              Learn more at radiotopia.fm.
            </PodcastDescription>
          </PodcastDetailsContainer>

          <PodcastButtonsContainer>
            <Button type="button" variant="primary" size="normal">
              {t("subscribe")}
            </Button>
          </PodcastButtonsContainer>

          <PodcastLinksContainer>
            <PodcastLinkContainer>
              <ExternalLink size={16} strokeWidth={1} color={iconColor} />
              <PodcastLink
                href="mailto:leonardomso11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("website")}
              </PodcastLink>
            </PodcastLinkContainer>

            <PodcastLinkContainer>
              <Rss size={16} strokeWidth={1} color={iconColor} />
              <PodcastLink
                href="mailto:leonardomso11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS
              </PodcastLink>
            </PodcastLinkContainer>

            <PodcastSearchInputContainer onSubmit={handleSubmit(onSubmit)}>
              <InputWithLeftIcon
                type="text"
                name="podcast"
                placeholder={t("search-episode")}
                ref={register}
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
