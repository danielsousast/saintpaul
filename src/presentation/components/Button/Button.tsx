import React from 'react';
import * as S from './ButtonStyles';

interface ButtonProps {
  onPress: () => void;
  children?: React.ReactNode;
}

export const Button = ({children, onPress}: ButtonProps) => {
  return (
    <S.ButtonWrapper onPress={onPress}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.ButtonWrapper>
  );
};
