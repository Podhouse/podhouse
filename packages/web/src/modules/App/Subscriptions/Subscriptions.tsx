import React, { useState, Suspense } from "react";
import { Box, Text, Link, Stack } from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import ReactGA from "react-ga";

import SkeletonPodcastsWithOnlyAvatarList from "src/components/Skeletons/SkeletonPodcastsWithOnlyAvatarList/SkeletonPodcastsWithOnlyAvatarList";

import { SubscriptionsContainer } from "./Subscriptions.styles";

import SubscriptionsPodcast from "./SubscriptionsPodcast/SubscriptionsPodcast";

import useAuthUser from "src/hooks/useAuthUser";

import { useAuthContext } from "src/machines/Auth/AuthContext";

import { getToken } from "src/utils/auth";

import { SubscriptionsQuery } from "./__generated__/SubscriptionsQuery.graphql";

ReactGA.initialize("G-8MV9SXCJQP");
ReactGA.pageview(window.location.pathname + window.location.search);

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
  const { handleAuth } = useAuthContext();

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
      <Box
        d="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="100%"
        bgColor="white"
      >
        <Stack spacing={4} shouldWrapChildren align="center">
          <Text color="#101010" maxWidth="300px" textAlign="center">
            You should be logged in to see your subscriptions
          </Text>
          <Link
            color="brand.900"
            fontWeight="bold"
            textTransform="uppercase"
            onClick={handleAuth}
          >
            Login
          </Link>
        </Stack>
      </Box>
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
        currentUser={currentUser}
        shouldLoadMore={shouldLoadMore}
      />
    </Scrollbars>
  );
};

const Subscriptions = () => (
  <Suspense
    fallback={
      <SubscriptionsContainer>
        <SkeletonPodcastsWithOnlyAvatarList />
      </SubscriptionsContainer>
    }
  >
    <SubscriptionsComponent />
  </Suspense>
);

export default Subscriptions;
