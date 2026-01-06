export type Theme = 'dark' | 'light';

export interface Interview {
  title: string;
  duration: string;
  technical: number;
  communication: number;
  summary: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  score: number;
  notes: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  items: string[];
}

