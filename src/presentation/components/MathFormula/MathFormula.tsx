import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {MathJaxSvg} from 'react-native-mathjax-html-to-svg';

interface MathFormulaProps {
  formula?: string;
  color?: string;
}

export function MathFormula({formula, color = '#fff'}: MathFormulaProps) {
  return (
    <Wrapper>
      <MathJaxSvg
        color="white"
        fontSize={18}
        style={{
          backgroundColor: color,
        }}>
        {formula}
      </MathJaxSvg>
    </Wrapper>
  );
}

export const Wrapper = styled.View`
  justify-content: center;
  background-color: ${({theme}) => theme.colors.shape};
  height: ${Dimensions.get('window').height / 12}px;
  width: ${Dimensions.get('window').width - 80}px;
`;
