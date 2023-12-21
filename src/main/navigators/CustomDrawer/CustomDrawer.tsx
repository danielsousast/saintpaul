/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {getFocusedRouteNameFromRoute, useRoute} from '@react-navigation/native';
import {CustomDrawerItem} from './DrawerItem';
import {useTheme} from 'styled-components';
import {ToggleTheme} from './ToggleTheme';
import {NavRoutes} from '../../utils/NavRoutes';
import * as S from './DrawerStyles';

const CustomDrawerContent = ({navigation}: DrawerContentComponentProps) => {
  const route = useRoute();
  const {colors} = useTheme();

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <S.Content>
        <S.DrawerItems>
          <ToggleTheme />
          <CustomDrawerItem
            label="Home"
            icon="home"
            active={getFocusedRouteNameFromRoute(route) === NavRoutes.Home}
            onPress={() => navigation.navigate(NavRoutes.Home)}
          />
          <CustomDrawerItem
            label="Histórico"
            icon="historic"
            active={getFocusedRouteNameFromRoute(route) === NavRoutes.Historic}
            onPress={() => navigation.navigate(NavRoutes.Historic)}
          />
        </S.DrawerItems>
      </S.Content>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
