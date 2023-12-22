import {Text} from '@/presentation/components';
import React from 'react';
import styled from 'styled-components/native';

export function EmptyList() {
  return (
    <Wrapper>
      <Text variant="body">Nenhum item encontrado</Text>
    </Wrapper>
  );
}

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;
