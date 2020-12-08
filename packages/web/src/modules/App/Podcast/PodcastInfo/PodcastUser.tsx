import graphql from "babel-plugin-relay/macro";

export const PodcastUserSubscribeToPodcast = graphql`
  mutation PodcastUserSubscribeToPodcastMutation(
    $input: UserSubscribeToPodcastInput!
  ) {
    UserSubscribeToPodcast(input: $input) {
      message
      error
    }
  }
`;

export const PodcastUserUnsubscribeToPodcast = graphql`
  mutation PodcastUserUnsubscribeToPodcastMutation(
    $input: UserUnsubscribeToPodcastInput!
  ) {
    UserUnsubscribeToPodcast(input: $input) {
      message
      error
    }
  }
`;
