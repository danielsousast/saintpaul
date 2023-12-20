import * as React from 'react';
import {ArrowLeftIcon} from './ArrowLeftIcon';
import HappyIcon from './HappyIcon';
import SadIcon from './SadIcon';
import RegularIcon from './RegularIcon';
import {LetterAIcon} from './LetterAIcon';
import {LetterBIcon} from './LetterBIcon';
import {LetterCIcon} from './LetterCIcon';

const iconMap = {
  arrowLeft: ArrowLeftIcon,
  happy: HappyIcon,
  sad: SadIcon,
  regular: RegularIcon,
  letterA: LetterAIcon,
  letterB: LetterBIcon,
  letterC: LetterCIcon,
};

export type IconNames = keyof typeof iconMap;

interface Props {
  name: IconNames;
  size?: number;
  color?: string;
}

export function Icon({name = 'arrowLeft', size = 20, color = '#ccc'}: Props) {
  const IconComponent = iconMap[name];
  return <IconComponent size={size} color={color} />;
}
