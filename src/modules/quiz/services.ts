import {questionsData} from '@/fakeAPI/questions';
import {QuestionRequest} from './request';

async function getQuestions() {
  const questions = await QuestionRequest.getQuestions();
  if (questions) {
    return questions;
  }
  return questionsData;
}

export const QuestionService = {
  getQuestions,
};
