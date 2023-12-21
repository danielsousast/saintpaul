import React, {useMemo} from 'react';
import {Quiz} from '@/modules/quiz/interfaces';
import {Icon, IconNames} from '@/presentation/components';
import * as S from './HistoricItemStyles';
import {DefaultTheme, useTheme} from 'styled-components/native';
import {formatDate} from '@/common/utils/dateUtils';

interface Props {
  quiz: Quiz;
}

export function HistoricItem({quiz}: Props) {
  const theme = useTheme();
  const {iconName, iconColor} = getIconByScore(quiz.score, theme);

  const formattedDate = useMemo(() => {
    return formatDate(quiz.date);
  }, [quiz.date]);

  return (
    <S.ItemContainer>
      <S.IconWrapper>
        <Icon name={iconName} color={iconColor} size={45} />
      </S.IconWrapper>
      <S.Content>
        <S.Description>Matematica</S.Description>
        <S.Label>{formattedDate}</S.Label>
      </S.Content>
      <S.Value>{quiz.score}%</S.Value>
    </S.ItemContainer>
  );
}

function getIconByScore(
  score: number,
  theme: DefaultTheme,
): {
  iconName: IconNames;
  iconColor: string;
} {
  if (score > 50) {
    return {
      iconName: 'happy',
      iconColor: theme.colors.success,
    };
  }
  if (score === 50) {
    return {
      iconName: 'regular',
      iconColor: theme.colors.warning,
    };
  }
  return {
    iconName: 'sad',
    iconColor: theme.colors.error,
  };
}
