import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import {ThemeProvider} from 'styled-components/native';
import {darkTheme} from '@/common/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainNavigator />
    </ThemeProvider>
  );
}
