import React from 'react';
import * as S from './Quizstyles';
import {QuizItem} from './components/QuizItem';
import {useQuizScreen} from './useQuizScreen';
import {Screen, Button} from '@/presentation/components';
import {QuizSkeleton} from './components/Skeleton';

export function QuizScreen() {
  const {
    questions,
    isLoading,
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
    <Screen canGoBack>
      <QuizSkeleton isLoading={isLoading} />
      {!isLoading && (
        <>
          <S.QuizTitle>
            {`Questão ${currentQuestionIndex + 1} de ${questions?.length}`}
          </S.QuizTitle>
          <S.ContentWrapper>
            <S.QuizQuestion>{currentQuestion?.question || ''}</S.QuizQuestion>
            {currentQuestion?.options.map((option, index) => {
              const questionId = currentQuestion.id as unknown as number;
              return (
                <QuizItem
                  selected={selectedOptions[questionId] === option.key}
                  key={option.answer}
                  option={option}
                  index={index}
                  onPress={() => handleAnswerQuestion(questionId, option.key)}
                />
              );
            })}
          </S.ContentWrapper>
          <Button onPress={handleNextQuestion} disabled={disbledNextButton}>
            {isTheLastQuesstion ? 'Finalizar' : 'Próxima'}
          </Button>
        </>
      )}
    </Screen>
  );
}
