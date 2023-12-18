import React from 'react';
import * as S from './QuizItemStyles';
import {MathFormula} from '../../../components';

interface QuizItemProps {
  option: {answer: string};
  index: number;
  selected: boolean;
  onPress: (item: {answer: string}) => void;
}

export function QuizItem({option, index, selected, onPress}: QuizItemProps) {
  return (
    <S.QuizItemWrapper
      key={option.answer}
      selected={selected}
      onPress={() => onPress(option)}>
      <S.QuizItemText>{mapIndexToLetter(index)}</S.QuizItemText>
      <MathFormula formula={option.answer} />
    </S.QuizItemWrapper>
  );
}

const mapIndexToLetter = (index: number) => {
  const letters = ['A) ', 'B) ', 'C) ', 'D) ', 'E)'];
  return letters[index];
};
