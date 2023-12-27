export interface Answer {
  id?: number;
  text: string;
  isTrue: boolean;
}

export interface Question {
  id?: number;
  text: string;
  feedbackFalse?: string;
  feedbackTrue?: string;
  answers?: Answer[];
  answer_id?: number;
}

export interface Quiz {
  created?: string;
  modified?: string;
  id?: number;
  title: string;
  description: string;
  score?: number;
  url?: string;
  questions?: Question[];
}
