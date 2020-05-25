import React from "react";
import Scrollbars from "react-custom-scrollbars";

import Row from "../../../components/Row/Row";

import { SubscriptionsContainer } from "./Subscriptions.styles";

const items = [
  {
    id: 1,
    name: "99% Invisible",
    episode: "387 - The Worst Video Game Ever",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 2,
    name: "99% Invisible",
    episode: "387 - The Worst Video Game Ever",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 3,
    name: "99% Invisible",
    episode: "387 - The Worst Video Game Ever",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 4,
    name: "99% Invisible",
    episode: "387 - The Worst Video Game Ever",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 5,
    name: "99% Invisible",
    episode: "387 - The Worst Video Game Ever",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 6,
    name: "99% Invisible",
    episode: "387 - The Worst Video Game Ever",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 7,
    name: "99% Invisible",
    episode: "387 - The Worst Video Game Ever",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 8,
    name: "99% Invisible",
    episode: "387 - The Worst Video Game Ever",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 9,
    name: "99% Invisible",
    episode: "387 - The Worst Video Game Ever",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
];

const Subscriptions: React.FC = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <SubscriptionsContainer>
      <Row title="Subscriptions" items={items} />
    </SubscriptionsContainer>
  </Scrollbars>
);

export default Subscriptions;
