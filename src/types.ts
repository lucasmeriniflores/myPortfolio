export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  githubUrl: string;
}

export interface NavItem {
  id: string;
  label: string;
}

// Changed from enum to const object to comply with modern TS erasableSyntaxOnly
export const SectionId = {
  HOME: 'home',
  WORKS: 'works',
  PROFILE: 'profile',
  CONTACT: 'contact'
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];