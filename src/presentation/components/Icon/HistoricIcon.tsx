import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconTypes';

export function HistoricIcon({size = 20, color = '#000'}: IconProps) {
  return (
    <Svg fill={color} width={size} height={size} viewBox="0 -1 16 16">
      <Path
        data-name="Path 89"
        d="M-5 8a7.008 7.008 0 01-7 7 .5.5 0 01-.5-.5.5.5 0 01.5-.5 6.006 6.006 0 006-6 6.006 6.006 0 00-6-6 6.006 6.006 0 00-6 6v.293l1.146-1.147a.5.5 0 01.708 0 .5.5 0 010 .708l-2 2a.518.518 0 01-.163.109.5.5 0 01-.191.037.5.5 0 01-.191-.038.518.518 0 01-.163-.109l-2-2a.5.5 0 010-.708.5.5 0 01.708 0L-19 8.293V8a7.008 7.008 0 017-7 7.008 7.008 0 017 7zm-7-4a.5.5 0 00-.5.5V8a.5.5 0 00.5.5h3.5A.5.5 0 00-8 8a.5.5 0 00-.5-.5h-3v-3A.5.5 0 00-12 4z"
        transform="translate(21 -1)"
      />
    </Svg>
  );
}
