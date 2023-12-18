import React from 'react';
import {Dimensions} from 'react-native';
//@ts-ignore
import MathJax from 'react-native-mathjax';
import styled from 'styled-components/native';

interface MathFormulaProps {
  formula?: string;
}

export function MathFormula({formula}: MathFormulaProps) {
  return (
    <Wrapper>
      <MathJax fontSize={40} html={formula} />
    </Wrapper>
  );
}

export const Wrapper = styled.View`
  justify-content: center;
  background-color: #fff;
  height: ${Dimensions.get('window').height / 12}px;
  width: ${Dimensions.get('window').width - 80}px;
`;
