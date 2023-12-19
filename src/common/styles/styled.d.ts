import 'styled-components/native';
import {darkTheme} from './theme';

type ThemeType = typeof darkTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
