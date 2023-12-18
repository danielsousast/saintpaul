import {useMemo, useState} from 'react';
import {useQuestions} from '../../../modules/question';

export function useQuizScreen() {
  const {questions} = useQuestions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({} as any);
  const [selectedOptions, setSelectedOptions] = useState({} as any);

  function handleNextQuestion() {
    if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  const currentQuestion = useMemo(() => {
    return questions[currentQuestionIndex];
  }, [currentQuestionIndex, questions]);

  function handleAnswerQuestion(questionId: number, optionKey: string) {
    setUserAnswers({
      ...userAnswers,
      [questionId]: optionKey,
    });

    setSelectedOptions({
      ...selectedOptions,
      [questionId]: optionKey,
    });
  }

  const _calculateResults = () => {
    let score = 0;
    questions.forEach(question => {
      const userAnswer = userAnswers[question.id];
      if (userAnswer !== undefined && question.options[userAnswer].correct) {
        score++;
      }
    });
    return score;
  };

  return {
    questions,
    currentQuestion,
    currentQuestionIndex,
    handleNextQuestion,
    handleAnswerQuestion,
    userAnswers,
    selectedOptions,
    _calculateResults,
  };
}
