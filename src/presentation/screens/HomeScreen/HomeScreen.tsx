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
    //@ts-ignore
    navigation.toggleDrawer();
  }

  return (
    <Screen
      onButtonPress={handleStart}
      buttonText="Resolver Questões"
      rightContent={<MenuIcon color={colors.text} />}
      onRightContentPress={onMenuPress}>
      <S.Content>
        <S.ImageContainer>
          <HomeIllustration size={250} />
        </S.ImageContainer>
        <S.Title>Questionário de Matemática</S.Title>
        <S.Description>
          No questionário você terá 10 questões de matemática para resolver. Ao
          final você poderá ver o seu resultado e o histórico de questionários
          já resolvidos. Para começar, clique no botão abaixo.
        </S.Description>
      </S.Content>
    </Screen>
  );
}
