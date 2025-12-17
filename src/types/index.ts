// Core data types for the academic website

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'workshop' | 'preprint' | 'book-chapter';
  abstract?: string;
  doi?: string;
  url?: string;
  pdfUrl?: string;
  citations?: number;
  tags?: string[];
  featured?: boolean;
}

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'planned';
  startDate: string;
  endDate?: string;
  role: string;
  team?: string[];
  funding?: string;
  url?: string;
  publications?: string[]; // Publication IDs
  tags?: string[];
  imageUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
  tags?: string[];
  featured?: boolean;
  draft?: boolean;
}

export interface Link {
  id: string;
  title: string;
  url: string;
  description: string;
  category: LinkCategoryType;
  tags?: string[];
  featured?: boolean;
  dateAdded?: string;
}

export type LinkCategoryType =
  | '5G/6G Research'
  | 'Standards & Specifications'
  | 'Tools & Frameworks'
  | 'Organizations & Consortia'
  | 'Educational Resources'
  | 'Research Databases'
  | 'Cybersecurity'
  | 'Cloud & Edge Computing'
  | 'Network Management'
  | 'AI & Machine Learning';

export interface Profile {
  name: string;
  title: string;
  affiliation: string;
  affiliationUrl?: string;
  bio: string;
  email?: string;
  location?: string;
  profileImage?: string;
  cvUrl?: string;
  socialLinks: SocialLinks;
  researchInterests: string[];
}

export interface SocialLinks {
  googleScholar?: string;
  orcid?: string;
  researchGate?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface CVSection {
  title: string;
  items: CVItem[];
}

export interface CVItem {
  title: string;
  organization?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  details?: string[];
}
