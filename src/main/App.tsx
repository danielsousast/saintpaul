import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import {ThemeProvider} from 'styled-components/native';
import {darkTheme, lightTheme} from '@/common/styles/theme';
import {useAppTheme} from './state/useAppThemeStore';

export default function App() {
  const {theme} = useAppTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <MainNavigator />
    </ThemeProvider>
  );
}
