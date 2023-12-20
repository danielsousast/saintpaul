import React from 'react';
import {AppScreenProps, NavRoutes} from '@/main/navigation';
import {Screen, HomeIllustration} from '@/presentation/components';
import * as S from './HomeStyles';
import {MenuIcon} from '@/presentation/components/Icon/MenuIcon';

export function HomeScreen({navigation}: AppScreenProps<NavRoutes.Home>) {
  function handleStart() {
    navigation.navigate(NavRoutes.Quiz);
  }

  function onMenuPress() {
    navigation.navigate(NavRoutes.Historic);
  }

  return (
    <Screen
      onButtonPress={handleStart}
      buttonText="Resolver Questões"
      rightContent={<MenuIcon />}
      onRightContentPress={onMenuPress}>
      <S.ImageContainer>
        <HomeIllustration size={350} />
      </S.ImageContainer>
    </Screen>
  );
}
