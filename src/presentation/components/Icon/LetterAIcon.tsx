import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconTypes';
import {useTheme} from 'styled-components/native';

export function LetterAIcon({size = 20, color = '#ccc'}: IconProps) {
  const {colors} = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 36 36">
      <Path
        fill={color}
        d="M36 32a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h28a4 4 0 014 4v28z"
      />
      <Path
        fill={colors.shape}
        d="M14.747 9.125c.527-1.426 1.736-2.573 3.317-2.573 1.643 0 2.792 1.085 3.318 2.573l6.077 16.867c.186.496.248.931.248 1.147 0 1.209-.992 2.046-2.139 2.046-1.303 0-1.954-.682-2.264-1.611l-.931-2.915h-8.62l-.93 2.884c-.31.961-.961 1.642-2.232 1.642-1.24 0-2.294-.93-2.294-2.17 0-.496.155-.868.217-1.023l6.233-16.867zm.34 11.256h5.891l-2.883-8.992h-.062l-2.946 8.992z"
      />
    </Svg>
  );
}
