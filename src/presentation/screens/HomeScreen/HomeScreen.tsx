import React from 'react';
import {AppScreenProps, NavRoutes} from '@/main/navigation';
import {Screen, HomeIllustration} from '@/presentation/components';
import * as S from './HomeStyles';

export function HomeScreen({navigation}: AppScreenProps<NavRoutes.Home>) {
  function handleStart() {
    navigation.navigate(NavRoutes.Quiz);
  }

  return (
    <Screen onButtonPress={handleStart} buttonText="Resolver Questões">
      <S.ImageContainer>
        <HomeIllustration size={350} />
      </S.ImageContainer>
    </Screen>
  );
}
