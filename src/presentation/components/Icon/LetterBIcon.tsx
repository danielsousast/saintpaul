import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconTypes';
import {useTheme} from 'styled-components/native';

export function LetterBIcon({size, color = '#ccc'}: IconProps) {
  const {colors} = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 36 36">
      <Path
        fill={color}
        d="M36 32a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h28a4 4 0 014 4v28z"
      />
      <Path
        fill={colors.shape}
        d="M10.498 9.249c0-1.488 1.023-2.325 2.449-2.325H18.9c3.224 0 5.83 2.17 5.83 5.457 0 2.17-.9 3.628-2.885 4.558v.062c2.637.372 4.713 2.573 4.713 5.271 0 4.372-2.914 6.729-7.193 6.729h-6.386c-1.427 0-2.481-.899-2.481-2.356V9.249zm4.651 6.418h2.419c1.519 0 2.511-.899 2.511-2.45 0-1.457-1.147-2.201-2.511-2.201h-2.419v4.651zm0 9.24h3.659c1.674 0 2.915-.961 2.915-2.697 0-1.458-1.117-2.45-3.287-2.45h-3.287v5.147z"
      />
    </Svg>
  );
}
