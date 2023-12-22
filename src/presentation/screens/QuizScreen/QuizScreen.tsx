import React from 'react';
import {QuizItem} from './components/QuizItem';
import {useQuizScreen} from './useQuizScreen';
import {Screen, Button, Text, ViewContent} from '@/presentation/components';
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
    showNextText,
  } = useQuizScreen();

  const disbledNextButton =
    !selectedOptions[currentQuestion?.id as unknown as number];

  return (
    <Screen canGoBack>
      <QuizSkeleton isLoading={isLoading} />
      {!isLoading && (
        <>
          <Text variant="caption" align="center" mb={20}>
            {`Questão ${currentQuestionIndex + 1} de ${questions?.length}`}
          </Text>
          <ViewContent>
            <Text mb={20} variant="subtitle">
              {currentQuestion?.question || ''}
            </Text>
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
          </ViewContent>
          <Button onPress={handleNextQuestion} disabled={disbledNextButton}>
            {showNextText ? 'Finalizar' : 'Próxima'}
          </Button>
        </>
      )}
    </Screen>
  );
}
