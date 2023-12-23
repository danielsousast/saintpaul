import React from 'react';
import {ThemeProvider} from 'styled-components/native';

import {useAppTheme} from './state/useAppThemeStore';
import {MainNavigator} from './navigators/MainNavigator';
import {darkTheme, lightTheme} from '@/common/styles/theme';

export function App() {
  const {theme} = useAppTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <MainNavigator />
    </ThemeProvider>
  );
}
