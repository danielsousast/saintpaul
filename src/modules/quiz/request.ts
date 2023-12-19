import {AxiosHttpClient} from '../../infra/http/AxiosHttpClient';

const httpClient = new AxiosHttpClient();

const getQuestions = async () => {
  const response = await httpClient.request({
    url: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
    method: 'get',
  });
  return response;
};

export const QuestionRequest = {
  getQuestions,
};
