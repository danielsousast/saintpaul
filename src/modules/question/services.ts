import {QuestionRequest} from './request';

async function getQuestions() {
  const questions = await QuestionRequest.getQuestions();
  return questions;
}

export const QuestionService = {
  getQuestions,
};
