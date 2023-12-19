import React from 'react';
import * as S from './Quizstyles';
import {QuizItem} from './components/QuizItem';
import {useQuizScreen} from './useQuizScreen';
import {Screen, Button} from '@/presentation/components';

export default function QuizScreen() {
  const {
    questions,
    currentQuestion,
    currentQuestionIndex,
    selectedOptions,
    handleAnswerQuestion,
    handleNextQuestion,
    isTheLastQuesstion,
  } = useQuizScreen();

  const disbledNextButton =
    !selectedOptions[currentQuestion?.id as unknown as number];

  return (
    <Screen>
      <S.QuizTitle>
        {`Questão ${currentQuestionIndex + 1} de ${questions?.length}`}
      </S.QuizTitle>
      <S.ContentWrapper>
        <S.QuizQuestion>{currentQuestion?.question || ''}</S.QuizQuestion>
        {currentQuestion?.options.map((option, index) => {
          const questionId = currentQuestion.id;
          return (
            <QuizItem
              selected={selectedOptions[questionId] === option.key}
              key={option.answer}
              option={option}
              index={index}
              onPress={() =>
                handleAnswerQuestion(
                  questionId as unknown as number,
                  option.key,
                )
              }
            />
          );
        })}
      </S.ContentWrapper>
      <Button onPress={handleNextQuestion} disabled={disbledNextButton}>
        {isTheLastQuesstion ? 'Finalizar' : 'Próxima'}
      </Button>
    </Screen>
  );
}
