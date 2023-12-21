/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {Content, ProfileContent, DrawerItems} from './DrawerStyles';
import CustomDrawerItem from './DrawerItem';
import {useTheme} from 'styled-components';
import {ToggleTheme} from './ToggleTheme';
import {NavRoutes} from '../NavRoutes';
import {getFocusedRouteNameFromRoute, useRoute} from '@react-navigation/native';

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
      <Content>
        <ProfileContent>
          {
            //<Avatar source={dummyData.myProfile?.profile_image} />
          }
        </ProfileContent>
        <DrawerItems>
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
        </DrawerItems>
      </Content>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
