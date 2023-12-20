import React from 'react';
import * as S from './QuizItemStyles';
import {Icon, IconNames, MathFormula} from '@/presentation/components';
import {useTheme} from 'styled-components/native';
import {LetterAIcon} from '@/presentation/components/Icon/LetterAIcon';

interface QuizItemProps {
  option: {answer: string};
  index: number;
  selected: boolean;
  onPress: (item: {answer: string}) => void;
}

export function QuizItem({option, index, selected, onPress}: QuizItemProps) {
  const {colors} = useTheme();
  return (
    <S.QuizItemWrapper
      key={option.answer}
      selected={selected}
      onPress={() => onPress(option)}>
      <Icon
        size={40}
        name={mapIndexToLetter(index)}
        color={selected ? colors.primary : colors.text}
      />
      <MathFormula formula={option.answer} color={colors.shape} />
    </S.QuizItemWrapper>
  );
}

const mapIndexToLetter = (index: number): IconNames => {
  const letters = ['letterA', 'letterB', 'letterC'];
  return letters[index] as IconNames;
};
