import React from "react";
import { withTranslation } from "i18n";
import { WithTranslation } from "next-i18next";
import Scrollbars from "react-custom-scrollbars";
import { Smile, Users, Feather } from "react-feather";

import { BrowseContainer } from "./Browse.styles";

import PodcastsWithDetails from "src/components/Lists/PodcastsWithDetails/PodcastsWithDetails";
import Featured from "src/components/Featured/Featured";
import Genres from "src/components/Genres/Genres";

const Browse = ({ t }: WithTranslation) => {
  const genres = [
    {
      id: 1,
      name: "Arts",
      icon: <Feather size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/arts",
    },
    {
      id: 2,
      name: "Business",
      icon: <Users size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/business",
    },
    {
      id: 3,
      name: "Comedy",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/comedy",
    },
    {
      id: 4,
      name: "Education",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/education",
    },
    {
      id: 5,
      name: "Fiction",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/fiction",
    },
    {
      id: 6,
      name: "Government",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/government",
    },
    {
      id: 7,
      name: "Health & Fitness",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/health",
    },
    {
      id: 8,
      name: "History",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/history",
    },
    {
      id: 9,
      name: "Kids & Family",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/kids",
    },
    {
      id: 10,
      name: "Leisure",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/leisure",
    },
    {
      id: 11,
      name: "Music",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/music",
    },
    {
      id: 12,
      name: "News",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/news",
    },
    {
      id: 13,
      name: "Religion & Spirituality",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/religion",
    },
    {
      id: 14,
      name: "Science",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/science",
    },
    {
      id: 15,
      name: "Society & Culture",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/society",
    },
    {
      id: 16,
      name: "Sports",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/sports",
    },
    {
      id: 17,
      name: "TV & Film",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/tv",
    },
    {
      id: 18,
      name: "Technology",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/technology",
    },
    {
      id: 19,
      name: "True Crime",
      icon: <Smile size={30} color="#B7B7B7" strokeWidth={1.7} />,
      href: "/app/genres/crime",
    },
  ];

  const items = [
    {
      id: 1,
      name: "99% Invisible",
      author: "Roman Mars",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
    },
    {
      id: 2,
      name: "99% Invisible",
      author: "Roman Mars",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
    },
    {
      id: 3,
      name: "99% Invisible",
      author: "Roman Mars",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
    },
    {
      id: 4,
      name: "99% Invisible",
      author: "Roman Mars",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
    },
    {
      id: 5,
      name: "99% Invisible",
      author: "Roman Mars",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
    },
    {
      id: 6,
      name: "99% Invisible",
      author: "Roman Mars",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
    },
    {
      id: 7,
      name: "99% Invisible",
      author: "Roman Mars",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
    },
    {
      id: 8,
      name: "99% Invisible",
      author: "Roman Mars",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
    },
    {
      id: 9,
      name: "99% Invisible",
      author: "Roman Mars",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
    },
  ];

  return (
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <BrowseContainer>
        <Featured />
        <PodcastsWithDetails title={t("trending")} items={items} />
        <PodcastsWithDetails title={t("recommended")} items={items} />
        <Genres title="Categories" genres={genres} />
      </BrowseContainer>
    </Scrollbars>
  );
};

Browse.getInitialProps = async () => ({ namespacesRequired: ["common"] });

export default withTranslation("common")(Browse);
