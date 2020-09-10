import React from "react";
import { withTranslation } from "i18n";
import Scrollbars from "react-custom-scrollbars";

import {
  EpisodeContainer,
  EpisodeHeader,
  EpisodeAvatar,
  EpisodeDetailsContainer,
  EpisodeName,
  EpisodeAuthor,
  EpisodeDescription,
  EpisodeListenButtonContainer,
} from "./Episode.styles";

import Button from "src/system/Button/Button";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const Episode = ({ t }: any) => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <EpisodeContainer>
      <EpisodeHeader>
        <EpisodeAvatar src={avatar} />

        <EpisodeDetailsContainer>
          <EpisodeName>
            A Fantasy of Fashion: Articles of Interest #7
          </EpisodeName>
          <EpisodeAuthor href="/app/podcast/invisible">
            99% Invisible
          </EpisodeAuthor>
          <EpisodeDescription>
            Design is everywhere in our lives, perhaps most importantly in the
            places where we've just stopped noticing. 99% Invisible is a weekly
            exploration of the process and power of design and architecture.
            From award winning producer Roman Mars. Learn more at
            99percentinvisible.org. A proud member of Radiotopia, from PRX.
            Learn more at radiotopia.fm.
          </EpisodeDescription>
        </EpisodeDetailsContainer>

        <EpisodeListenButtonContainer>
          <Button type="button" variant="primary" size="normal">
            {t("listen")}
          </Button>
        </EpisodeListenButtonContainer>
      </EpisodeHeader>
    </EpisodeContainer>
  </Scrollbars>
);

Episode.getInitialProps = async () => ({ namespacesRequired: ["podcast"] });

export default withTranslation("podcast")(Episode);
