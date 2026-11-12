export interface GitHubRepositoryTopicNode {
  topic: {
    name: string;
  };
}

export interface GitHubPrimaryLanguage {
  name: string;
  color: string | null;
}

export interface GitHubGraphQLRepoNode {
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: GitHubPrimaryLanguage | null;
  updatedAt: string;
  createdAt?: string;
  isPrivate: boolean;
  isArchived: boolean;
  repositoryTopics?: {
    nodes: GitHubRepositoryTopicNode[];
  };
}

export interface GitHubGraphQLResponse {
  data?: {
    user?: {
      name: string | null;
      login: string;
      bio: string | null;
      avatarUrl: string;
      url: string;
      websiteUrl: string | null;
      location: string | null;
      pinnedItems?: {
        nodes: (GitHubGraphQLRepoNode | null)[];
      };
    };
  };
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
  }>;
}

export interface GitHubRestRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  updated_at: string;
  created_at: string;
  archived: boolean;
  private: boolean;
  visibility: string;
  default_branch?: string;
}

export interface GitHubRestUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
