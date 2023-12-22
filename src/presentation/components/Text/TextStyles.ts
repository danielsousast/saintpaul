import styled, {DefaultTheme, css} from 'styled-components/native';

export type TextVariants =
  | 'title'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'button'
  | 'label';

const textModifiers = {
  title: (theme: DefaultTheme) => css`
    font-size: 24px;
    font-weight: bold;
    font-family: ${theme.fonts.bold};
  `,
  subtitle: (theme: DefaultTheme) => css`
    font-size: 20px;
    font-weight: bold;
    font-family: ${theme.fonts.bold};
  `,
  body: (theme: DefaultTheme) => css`
    font-size: 16px;
    font-family: ${theme.fonts.regular};
  `,
  caption: (theme: DefaultTheme) => css`
    font-size: 18px;
    font-family: ${theme.fonts.light};
  `,
  button: (theme: DefaultTheme) => css`
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: ${theme.fonts.medium};
  `,
  label: (theme: DefaultTheme) => css`
    font-size: 12px;
    font-family: ${theme.fonts.regular};
  `,
};

interface TextProps {
  variant?: TextVariants;
  mb?: number;
  mt?: number;
  color?: string;
  align?: 'center' | 'left' | 'right';
}

export const RNText = styled.Text<TextProps>`
  color: ${({theme, color}) => color ?? theme.colors.text};
  ${({variant = 'body', theme}) => textModifiers[variant](theme)};
  ${({mb}) => mb && `margin-bottom: ${mb}px`};
  ${({mt}) => mt && `margin-top: ${mt}px`};
  ${({align}) => align && `text-align: ${align}`};
`;
