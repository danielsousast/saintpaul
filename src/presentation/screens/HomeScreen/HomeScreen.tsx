import React from 'react';
import {AppScreenProps, NavRoutes} from '@/main';
import {Screen, HomeIllustration} from '@/presentation/components';
import {MenuIcon} from '@/presentation/components/Icon/MenuIcon';
import {useTheme} from 'styled-components/native';
import * as S from './HomeStyles';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

export function HomeScreen({
  navigation,
}: AppScreenProps<NavRoutes.Home> & DrawerContentComponentProps) {
  const {colors} = useTheme();
  function handleStart() {
    navigation.navigate(NavRoutes.Quiz);
  }

  function onMenuPress() {
    navigation.toggleDrawer();
  }

  return (
    <Screen
      scrollable
      onButtonPress={handleStart}
      buttonText="Resolver"
      rightContent={<MenuIcon color={colors.text} />}
      onRightContentPress={onMenuPress}>
      <S.Content>
        <S.ImageContainer>
          <HomeIllustration size={250} />
        </S.ImageContainer>
        <S.Title>Resolva o questionário</S.Title>
        <S.Description>
          No questionário você terá 10 questões de matemática para resolver. Ao
          final você poderá ver o seu resultado e o histórico de questionários
          já resolvidos. Para começar, clique no botão abaixo.
        </S.Description>
      </S.Content>
    </Screen>
  );
}
