import React from 'react';
import {Quiz} from '@/modules/quiz/interfaces';
import {Icon, IconNames} from '@/presentation/components';
import * as S from './HistoricItemStyles';

interface Props {
  quiz: Quiz;
}

export function HistoricItem({quiz}: Props) {
  const {iconName, iconColor} = getIconByScore(quiz.score);
  return (
    <S.ItemContainer>
      <S.IconWrapper>
        <Icon name={iconName} color={iconColor} size={45} />
      </S.IconWrapper>

      <S.Content>
        <S.Description>Matematica</S.Description>
        <S.Label>10.10.2020</S.Label>
      </S.Content>
      <S.Value>{quiz.score}%</S.Value>
    </S.ItemContainer>
  );
}

function getIconByScore(score: number): {
  iconName: IconNames;
  iconColor: string;
} {
  if (score > 50) {
    return {
      iconName: 'happy',
      iconColor: '#63c76ba9',
    };
  }
  if (score === 50) {
    return {
      iconName: 'regular',
      iconColor: '#d2b463',
    };
  }
  return {
    iconName: 'sad',
    iconColor: '#d76d61',
  };
}
