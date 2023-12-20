import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconTypes';

export function MenuIcon({size = 20, color = '#fff', onPress}: IconProps) {
  return (
    <Svg fill="none" viewBox={`0 0 ${size} ${size}`} onPress={onPress}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 17h7M5 12h14M5 7h14"
      />
    </Svg>
  );
}
