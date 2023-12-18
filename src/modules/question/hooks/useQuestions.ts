import {useEffect, useState} from 'react';
import {QuestionService} from '../services';
import {Question} from '../interfaces';

export function useQuestions() {
  const [questions, setQuestions] = useState([] as Question[]);
  const [loading, setLoading] = useState(false);

  async function getQuestions() {
    setLoading(true);
    const response = await QuestionService.getQuestions();
    console.log(response);
    setQuestions(response.body);
    setLoading(false);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return {
    questions,
    loading,
  };
}
