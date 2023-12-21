import React from 'react';

import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {NavRoutes} from './NavRoutes';
import {HomeScreen, HistoricScreen} from '@/presentation/screens';
import CustomDrawerContent from './CustomDrawer/CustomDrawer';
import {useTheme} from 'styled-components/native';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const {colors} = useTheme();
  const renderDrawer = (props: DrawerContentComponentProps) => {
    return <CustomDrawerContent {...props} />;
  };
  return (
    <Drawer.Navigator
      drawerContent={renderDrawer}
      screenOptions={({}) => ({
        swipeEnabled: true,
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.background,
        },
      })}>
      <Drawer.Screen
        name={NavRoutes.Home}
        component={HomeScreen as any}
        options={{
          title: 'Início',
        }}
      />
      <Drawer.Screen
        name={NavRoutes.Historic}
        component={HistoricScreen}
        options={{
          title: 'Histórico',
        }}
      />
    </Drawer.Navigator>
  );
}
