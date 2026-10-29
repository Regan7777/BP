export type FaqItem = {
  question: string;
  answer: string;
  errorCode?: string;
  fixType?: 'terminal' | 'gui';
  fixInstruction?: string;
  fixContent?: string;
  errorCommand?: string;
  relatedLink?: {
    text: string;
    href: string;
  };
};

export type ArticleSection = {
  id: string;
  num: number;
  title: string;
  lead?: string;
  paragraphs: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type ProsAndCons = {
  prosTitle?: string;
  pros: string[];
  consTitle?: string;
  cons: string[];
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  author: string;
  updatedDate?: string;
  trending?: boolean;
  featured?: boolean;
  score?: string;
  price?: string;
  region?: string;
  platform?: string;
  keywords?: string[];
  directAnswer?: string;
  prosAndCons?: ProsAndCons;
  sections?: ArticleSection[];
  faq?: FaqItem[];
  relatedSlugs?: string[];
};

export type NavSubItem = {
  label: string;
  href: string;
  desc?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavSubItem[];
};

export type Category = {
  slug: string;
  name: string;
  description: string;
};
