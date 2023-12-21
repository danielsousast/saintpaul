import React from 'react';
import * as S from './LinkButtonStyles';

interface ButtonProps {
  onPress: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const LinkButton = ({children, onPress, disabled}: ButtonProps) => {
  return (
    <S.ButtonWrapper onPress={onPress} disabled={disabled}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.ButtonWrapper>
  );
};
