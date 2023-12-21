import {useCallback, useMemo, useState} from 'react';
import {useQuestions} from '@/modules/quiz';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NavRoutes} from '@/main/utils/NavRoutes';
import {AppStackParamList} from '@/main/utils/NavigationTypes';
import {useHistoricStore} from '@/main/state/useHistoricStore';

const TOTAL_QUESTIONS = 10;

export function useQuizScreen() {
  const {setQuiz} = useHistoricStore();
  const {questions, isLoading} = useQuestions();
  const {reset} = useNavigation<NavigationProp<AppStackParamList>>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({} as any);
  const [selectedOptions, setSelectedOptions] = useState({} as any);
  const [isTheLastQuesstion, setIsTheLastQuesstion] = useState(false);

  function handleNextQuestion() {
    if (currentQuestionIndex === questions.length - 2) {
      setIsTheLastQuesstion(true);
    }
    if (currentQuestionIndex === questions.length - 1) {
      const score = calculateResults();
      setQuiz({
        id: Math.random(),
        date: new Date().toISOString(),
        correctAnswers: score,
        totalQuestions: TOTAL_QUESTIONS,
        score: (score / TOTAL_QUESTIONS) * 100,
      });
      reset({
        index: 0,
        routes: [
          {
            name: NavRoutes.Settings,
          },
          {
            name: NavRoutes.Result,
            params: {
              score,
            },
          },
        ],
      });
      return;
    }
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

  const calculateResults = useCallback(() => {
    let score = 0;
    questions.forEach(question => {
      const userAnswer = userAnswers[question.id];
      const selectedOption = question.options.find(
        option => option.key === selectedOptions[question.id],
      );

      if (userAnswer !== undefined && selectedOption?.correct) {
        score++;
      }
    });
    return score;
  }, [questions, selectedOptions, userAnswers]);

  return {
    questions,
    currentQuestion,
    currentQuestionIndex,
    handleNextQuestion,
    handleAnswerQuestion,
    userAnswers,
    selectedOptions,
    calculateResults,
    isTheLastQuesstion,
    isLoading,
  };
}
