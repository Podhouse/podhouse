import React, { useState, Suspense } from "react";
import { Heading } from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";

import SubscriptionsPodcast from "./SubscriptionsPodcast/SubscriptionsPodcast";

import useAuthUser from "src/hooks/useAuthUser";

import { getToken } from "src/utils/auth";

import { SubscriptionsQuery } from "./__generated__/SubscriptionsQuery.graphql";

const query = graphql`
  query SubscriptionsQuery {
    currentUser {
      ...useAuthUser_user
      ...SubscriptionsPodcast_subscriptions
    }
  }
`;

type ScrollFrameType = {
  clientHeight: number;
  clientWidth: number;
  left: number;
  scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
  top: number;
};

const SubscriptionsComponent = () => {
  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false);

  const { currentUser } = useLazyLoadQuery<SubscriptionsQuery>(
    query,
    {},
    {
      fetchPolicy: "store-and-network",
      fetchKey: getToken(),
    }
  );

  const onLoadMore = (value: ScrollFrameType) => {
    if (value.top === 1) {
      setShouldLoadMore(true);
    }
    setShouldLoadMore(false);
  };

  const user = useAuthUser(currentUser);

  if (!user) {
    return (
      <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
        <Heading color="#101010" as="h1" letterSpacing="-0.03em">
          You should be logged in to see your subscriptions
        </Heading>
      </Scrollbars>
    );
  }

  return (
    <Scrollbars
      onScrollFrame={onLoadMore}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      <SubscriptionsPodcast
        user={currentUser}
        shouldLoadMore={shouldLoadMore}
      />
    </Scrollbars>
  );
};

const Subscriptions = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <SubscriptionsComponent />
  </Suspense>
);

export default Subscriptions;
