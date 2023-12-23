import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconTypes';

export function HappyIcon({size, color = '#ccc'}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464zM15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5.448 1.5 1 1.5zm-5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5zm-1.603 5.053a.75.75 0 011.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 11.894 1.204A5.766 5.766 0 0112 17.75a5.766 5.766 0 01-3.447-1.148.75.75 0 01-.156-1.049z"
        fill={color}
      />
    </Svg>
  );
}
