import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
}

export function ArrowLeftIcon({size = 20, color = '#000'}: IconProps) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M5 12l6-6m-6 6l6 6"
      />
    </Svg>
  );
}
