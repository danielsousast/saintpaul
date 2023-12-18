import React from 'react';
import * as S from './Quizstyles';
import {Button} from '../../components';
import {QuizItem} from './components/QuizItem';
import {useQuizScreen} from './useQuizScreen';

export default function QuizScreen() {
  const {
    questions,
    currentQuestion,
    currentQuestionIndex,
    selectedOptions,
    handleAnswerQuestion,
    handleNextQuestion,
  } = useQuizScreen();

  return (
    <S.Container>
      <S.QuizTitle>
        {`Questão ${currentQuestionIndex + 1} de ${questions?.length}`}
      </S.QuizTitle>
      <S.Content>
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
        <Button onPress={handleNextQuestion}>Próxima</Button>
      </S.Content>
    </S.Container>
  );
}
