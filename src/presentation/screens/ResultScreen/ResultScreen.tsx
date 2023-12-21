import React from 'react';
import * as S from './ResultStyles';
import {Screen, ResultIllustration} from '@/presentation/components';
import {AppScreenProps, NavRoutes} from '@/main/navigation';
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
          <S.Label>Acertos</S.Label>
          <S.Value
            style={{
              color: colors.success,
            }}>
            {score} questões
          </S.Value>
        </S.LeftContent>
        <S.RightContent>
          <S.Label>Incorretas</S.Label>
          <S.Value
            style={{
              color: colors.error,
            }}>
            {TOTAL_QUESTIONS - score} questões
          </S.Value>
        </S.RightContent>
      </S.Row>
    </Screen>
  );
}
