export interface QuestionAPI {
  id: string;
  question: string;
  options: {
    key: string;
    answer: string;
    correct: boolean;
  }[];
}

export interface Question extends QuestionAPI {
  answer: string;
}

export interface Quiz {
  id: number;
  date: string;
  correctAnswers: number;
  totalQuestions: number;
  score: number;
}
