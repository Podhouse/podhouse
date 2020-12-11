import graphql from "babel-plugin-relay/macro";

export const PodcastUserSubscribeToPodcast = graphql`
  mutation PodcastUserSubscribeToPodcastMutation(
    $input: UserSubscribeToPodcastInput!
    $subscribedInput: UserSubscribedInput!
  ) {
    UserSubscribeToPodcast(input: $input) {
      error
      user {
        node {
          subscribed(input: $subscribedInput)
        }
      }
    }
  }
`;

export const PodcastUserUnsubscribeToPodcast = graphql`
  mutation PodcastUserUnsubscribeToPodcastMutation(
    $input: UserUnsubscribeToPodcastInput!
    $unsubscribedInput: UserSubscribedInput!
  ) {
    UserUnsubscribeToPodcast(input: $input) {
      error
      user {
        node {
          subscribed(input: $unsubscribedInput)
        }
      }
    }
  }
`;
