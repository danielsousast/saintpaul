import React from 'react';
import * as S from './LinkButtonStyles';
import {Text} from '../Text/Text';

interface ButtonProps {
  onPress: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const LinkButton = ({children, onPress, disabled}: ButtonProps) => {
  return (
    <S.ButtonWrapper onPress={onPress} disabled={disabled}>
      <Text variant="button" align="center">
        {children}
      </Text>
    </S.ButtonWrapper>
  );
};
