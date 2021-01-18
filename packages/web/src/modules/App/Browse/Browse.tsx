import React from "react";
import { Helmet } from "react-helmet";
import Scrollbars from "react-custom-scrollbars";
import { useLocation } from "react-router-dom";

import { BrowseContainer } from "./Browse.styles";

import Featured from "src/components/Featured/Featured";

import Genres from "./Genres/Genres";

import featured from "src/utils/featured";

const Browse = () => {
  const location = useLocation();

  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <BrowseContainer>
        <Helmet>
          <title>Browse</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="The best podcast web app to listen to your favorite podcasts"
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta property="twitter:title" content="Podhouse" />
          <meta
            property="twitter:description"
            content="The best podcast web app to listen to your favorite podcasts"
          />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/C1TOvBB.jpg"
          />
          <meta property="twitter:url" content={location.pathname} />

          {/* Open Graph */}
          <meta property="og:url" content={location.pathname} key="ogurl" />
          <meta
            property="og:image"
            content="https://i.imgur.com/C1TOvBB.jpg"
            key="ogimage"
          />
          <meta property="og:site_name" content="Podhouse" key="ogsitename" />
          <meta property="og:title" content="Podhouse" key="ogtitle" />
          <meta
            property="og:description"
            content="The best podcast web app to listen to your favorite podcasts"
            key="ogdesc"
          />
        </Helmet>

        <Featured featured={featured} />

        <Genres />
      </BrowseContainer>
    </Scrollbars>
  );
};

export default Browse;
