import graphql from "babel-plugin-relay/macro";

export const PodcastUserSubscribeToPodcast = graphql`
  mutation PodcastUserSubscribeToPodcastMutation(
    $input: UserSubscribeToPodcastInput!
  ) {
    UserSubscribeToPodcast(input: $input) {
      user {
        node {
          subscriptions {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const PodcastUserUnsubscribeToPodcast = graphql`
  mutation PodcastUserUnsubscribeToPodcastMutation(
    $input: UserUnsubscribeToPodcastInput!
  ) {
    UserUnsubscribeToPodcast(input: $input) {
      user {
        node {
          subscriptions {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;
