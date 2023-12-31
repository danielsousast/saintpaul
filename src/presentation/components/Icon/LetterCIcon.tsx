import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconTypes';
import {useTheme} from 'styled-components/native';

export function LetterCIcon({size = 20, color = '#ccc'}: IconProps) {
  const {colors} = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 36 36">
      <Path
        fill={color}
        d="M36 32a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h28a4 4 0 014 4v28z"
      />
      <Path
        fill={colors.shape}
        d="M19.723 6.552c2.264 0 6.666.744 6.666 3.473 0 1.116-.775 2.077-1.922 2.077-1.272 0-2.139-1.085-4.744-1.085-3.844 0-5.829 3.256-5.829 7.038 0 3.689 2.015 6.852 5.829 6.852 2.605 0 3.658-1.302 4.93-1.302 1.396 0 2.047 1.395 2.047 2.107 0 2.977-4.682 3.659-6.976 3.659-6.294 0-10.666-4.992-10.666-11.41-.001-6.448 4.34-11.409 10.665-11.409z"
      />
    </Svg>
  );
}
