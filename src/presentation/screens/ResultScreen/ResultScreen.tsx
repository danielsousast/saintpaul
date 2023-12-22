import React from 'react';
import * as S from './ResultStyles';
import {Screen, ResultIllustration, Text} from '@/presentation/components';
import {AppScreenProps, NavRoutes} from '@/main';
import {useTheme} from 'styled-components/native';

const TOTAL_QUESTIONS = 10;

export function ResultScreen({
  navigation,
  route,
}: AppScreenProps<NavRoutes.Result>) {
  const {colors} = useTheme();
  const {score} = route.params;

  function handleDone() {
    navigation.goBack();
  }
  return (
    <Screen onButtonPress={handleDone} buttonText="Conluir" canGoBack>
      <S.ResultBox>
        <ResultIllustration size={150} />
      </S.ResultBox>
      <S.Row>
        <S.LeftContent>
          <Text variant="caption">Acertos</Text>
          <Text color={colors.success} variant="subtitle">
            {score} questões
          </Text>
        </S.LeftContent>
        <S.RightContent>
          <Text variant="caption">Incorretas</Text>
          <Text color={colors.error} variant="subtitle">
            {TOTAL_QUESTIONS - score} questões
          </Text>
        </S.RightContent>
      </S.Row>
    </Screen>
  );
}
