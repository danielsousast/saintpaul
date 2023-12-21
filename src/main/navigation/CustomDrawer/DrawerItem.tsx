import React from 'react';

import * as S from './DrawerStyles';
import {Icon, IconNames} from '@/presentation/components';
import {useTheme} from 'styled-components/native';

interface ComponentProps {
  label: string;
  onPress: () => void;
  active?: boolean;
  icon: IconNames;
}

const CustomDrawerItem: React.FC<ComponentProps> = ({
  label,
  onPress,
  active = false,
  icon,
}) => {
  const {colors} = useTheme();
  return (
    <S.DrawerItemContainer onPress={onPress} active={active}>
      <Icon name={icon} color={active ? colors.primary : colors.text} />
      <S.Label active={active}>{label}</S.Label>
    </S.DrawerItemContainer>
  );
};

export default CustomDrawerItem;
