export interface BlogPost {
  title: string;
  description: string;
  pubDate: Date;
  author: string;
  tags: string[];
  draft?: boolean;
  heroImage?: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  author?: string;
  tags?: string[];
  draft?: boolean;
  heroImage?: string;
}
