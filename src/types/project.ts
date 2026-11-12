export type ProjectCategory =
  | "All"
  | "AI & LLMOps"
  | "Autonomous Systems & Robotics"
  | "High-Performance Systems"
  | "Enterprise Web & Healthcare";

export interface ProjectArchitecture {
  overview: string;
  components: Array<{
    title: string;
    description: string;
  }>;
}

export interface Project {
  slug: string;
  name: string;
  displayName: string;
  tagline: string;
  description: string;
  htmlUrl: string;
  homepageUrl: string | null;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  updatedAt: string;
  createdAt: string;
  topics: string[];
  isArchived: boolean;
  isPinned: boolean;
  category: ProjectCategory;
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  architecture: ProjectArchitecture;
  techStack: string[];
  highlights: string[];
}
