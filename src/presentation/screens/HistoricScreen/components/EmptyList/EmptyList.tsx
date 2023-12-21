import React from 'react';
import styled from 'styled-components/native';

export function EmptyList() {
  return (
    <Wrapper>
      <Message>Nenhum item encontrado</Message>
    </Wrapper>
  );
}

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  color: ${({theme}) => theme.colors.text};
`;
