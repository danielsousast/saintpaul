import React from 'react';

import * as S from './DrawerStyles';

import {Switch} from 'react-native';
import {useAppTheme} from '@/main/state/useAppThemeStore';
import {useTheme} from 'styled-components/native';

export const ToggleTheme = () => {
  const {colors} = useTheme();
  const {toggleTheme, theme} = useAppTheme();

  function handleToggleTheme() {
    toggleTheme();
  }

  return (
    <S.DrawerItemContainer>
      <Switch
        value={theme === 'dark'}
        onChange={handleToggleTheme}
        trackColor={{false: colors.gray, true: colors.primary}}
        style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
      />
      <S.Label>Tema do App</S.Label>
    </S.DrawerItemContainer>
  );
};
