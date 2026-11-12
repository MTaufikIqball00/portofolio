export const PINNED_REPOS_GRAPHQL_QUERY = `
  query GetPinnedRepos($username: String!) {
    user(login: $username) {
      name
      login
      bio
      avatarUrl
      url
      websiteUrl
      location
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            homepageUrl
            stargazerCount
            forkCount
            primaryLanguage {
              name
              color
            }
            updatedAt
            createdAt
            isPrivate
            isArchived
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
