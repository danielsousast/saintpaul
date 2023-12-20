import React from 'react';
import {Dimensions} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {MathJaxSvg} from 'react-native-mathjax-html-to-svg';

interface MathFormulaProps {
  formula?: string;
  color?: string;
}

export function MathFormula({formula, color = '#fff'}: MathFormulaProps) {
  const {colors} = useTheme();
  return (
    <Wrapper>
      <MathJaxSvg
        color={colors.text}
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
  margin-left: 10px;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.shape};
  height: ${Dimensions.get('window').height / 12}px;
  width: ${Dimensions.get('window').width - 80}px;
`;
