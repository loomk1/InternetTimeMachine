
export type EraYear = 1995 | 2000 | 2005 | 2010 | 2015 | 2020 | 2025;

export interface EraMetadata {
  year: EraYear;
  title: string;
  description: string;
  techKeywords: string[];
  vibe: string;
  techStack: string[];
  milestones: string[];
  popularSites: string[];
  funFacts: string[];
  designPalette: string[];
}

export interface QuizQuestion {
  id: number;
  year: EraYear;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface AppState {
  currentYear: EraYear;
  compareMode: boolean;
  compareYear: EraYear;
  showQuiz: boolean;
}
