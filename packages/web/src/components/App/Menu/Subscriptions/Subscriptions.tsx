import * as React from "react";
import Link from "next/link";

import {
  SubscriptionsContainer,
  SubscriptionsHeader,
  SubscriptionsItem,
  SubscriptionsAvatar,
  SubscriptionsLink,
  SubscriptionsTitle,
} from "./Subscriptions.styles";

const subscriptions = [
  {
    name: "99% Invisible",
    feed: "testing",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    name: "99% Invisible",
    feed: "testing",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    name: "99% Invisible",
    feed: "testing",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    name: "99% Invisible",
    feed: "testing",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    name: "99% Invisible",
    feed: "testing",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    name: "99% Invisible",
    feed: "testing",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    name: "99% Invisible",
    feed: "testing",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    name: "99% Invisible",
    feed: "testing",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    name: "99% Invisible",
    feed: "testing",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    name: "99% Invisible",
    feed: "testing",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    name: "99% Invisible",
    feed: "testing",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    name: "99% Invisible",
    feed: "testing",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
];

const Subscriptions = () => {
  const redirectPodcast = () => {};

  const renderSubscriptions = () => {
    if (subscriptions && subscriptions.length) {
      return subscriptions.map(({ name, avatar }: any) => (
        <SubscriptionsItem
          onClick={redirectPodcast}
          key={Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 5)}
        >
          <SubscriptionsAvatar avatar={avatar} />
          <Link href="/app/podcast/123" passHref>
            <SubscriptionsLink>{name}</SubscriptionsLink>
          </Link>
        </SubscriptionsItem>
      ));
    }

    return null;
  };

  return (
    <SubscriptionsContainer>
      <SubscriptionsHeader>
        <SubscriptionsTitle>Subscriptions</SubscriptionsTitle>
      </SubscriptionsHeader>

      {renderSubscriptions()}
    </SubscriptionsContainer>
  );
};

export default Subscriptions;
