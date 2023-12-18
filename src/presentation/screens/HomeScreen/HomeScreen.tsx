import React from 'react';
import {SafeAreaView} from 'react-native';
import {MathFormula} from '../../components/MathFormula/MathFormula';

export function HomeScreen() {
  return (
    <SafeAreaView>
      <MathFormula formula="x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" />
    </SafeAreaView>
  );
}
