import React from 'react';
import {AppScreenProps, NavRoutes} from '@/main/navigation';
import {Screen, HomeIllustration} from '@/presentation/components';
import * as S from './HomeStyles';
import {MenuIcon} from '@/presentation/components/Icon/MenuIcon';
import {useTheme} from 'styled-components/native';

export function HomeScreen({navigation}: AppScreenProps<NavRoutes.Home>) {
  const {colors} = useTheme();
  function handleStart() {
    navigation.navigate(NavRoutes.Quiz);
  }

  function onMenuPress() {
    navigation.toggleDrawer();
  }

  return (
    <Screen
      onButtonPress={handleStart}
      buttonText="Resolver Questões"
      rightContent={<MenuIcon color={colors.text} />}
      onRightContentPress={onMenuPress}>
      <S.ImageContainer>
        <HomeIllustration size={350} />
      </S.ImageContainer>
    </Screen>
  );
}
