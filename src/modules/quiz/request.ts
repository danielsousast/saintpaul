import {AxiosHttpClient} from '../../infra/http/AxiosHttpClient';

const httpClient = new AxiosHttpClient();

const getQuestions = async () => {
  const response = await httpClient.request({
    url: 'https://api.mockfly.dev/mocks/f95d76ff-cc4b-43c1-b97a-b035fe289669/questions',
    method: 'get',
  });
  return response;
};

export const QuestionRequest = {
  getQuestions,
};
