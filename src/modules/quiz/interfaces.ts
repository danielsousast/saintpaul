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
