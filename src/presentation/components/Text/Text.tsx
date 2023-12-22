import React from 'react';
import {RNText, TextVariants} from './TextStyles';

interface Props {
  children: React.ReactNode;
  variant?: TextVariants;
  color?: string;
  mt?: number;
  mb?: number;
  align?: 'center' | 'left' | 'right';
}

export function Text({children, variant = 'body', ...rest}: Props) {
  return (
    <RNText variant={variant} {...rest}>
      {children}
    </RNText>
  );
}
