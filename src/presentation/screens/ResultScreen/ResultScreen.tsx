import React from 'react';
import * as S from './ResultStyles';
import {Screen, ResultIllustration} from '@/presentation/components';
import {AppScreenProps, NavRoutes} from '@/main/navigation';

const TOTAL_QUESTIONS = 10;

export default function ResultScreen({
  navigation,
  route,
}: AppScreenProps<NavRoutes.Result>) {
  const {score} = route.params;

  function handleDone() {
    navigation.goBack();
  }
  return (
    <Screen onButtonPress={handleDone} buttonText="Conluir">
      <S.ResultBox>
        <ResultIllustration size={150} />
      </S.ResultBox>
      <S.Row>
        <S.LeftContent>
          <S.Label>Acertos</S.Label>
          <S.Value>{score} questões</S.Value>
        </S.LeftContent>
        <S.RightContent>
          <S.Label>Respostas erradas</S.Label>
          <S.Value>{TOTAL_QUESTIONS - score} questões</S.Value>
        </S.RightContent>
      </S.Row>
    </Screen>
  );
}