import React from 'react';
import {useTheme} from 'styled-components/native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

import {AppScreenProps, NavRoutes} from '@/main';
import {Screen, HomeIllustration, Icon, Text} from '@/presentation/components';
import * as S from './HomeStyles';

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
      rightContent={<Icon name="menu" color={colors.text} />}
      onRightContentPress={onMenuPress}>
      <S.Content>
        <S.ImageContainer>
          <HomeIllustration size={250} />
        </S.ImageContainer>
        <Text variant="title">Resolva o questionário</Text>
        <Text variant="caption" mt={20}>
          No questionário você terá 10 questões de matemática para resolver. Ao
          final você poderá ver o seu resultado e o histórico de questionários
          já resolvidos. Para começar, clique no botão abaixo.
        </Text>
      </S.Content>
    </Screen>
  );
}
