import React from 'react';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {useTheme} from 'styled-components/native';
import {HomeScreen, HistoricScreen} from '@/presentation/screens';
import {CustomDrawerContent} from './CustomDrawer/CustomDrawer';
import {NavRoutes} from '../utils/NavRoutes';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const {colors} = useTheme();

  const renderDrawer = (props: DrawerContentComponentProps) => {
    return <CustomDrawerContent {...props} />;
  };

  return (
    <Drawer.Navigator
      drawerContent={renderDrawer}
      screenOptions={() => ({
        swipeEnabled: true,
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.background,
        },
      })}>
      <Drawer.Screen name={NavRoutes.Home} component={HomeScreen as any} />
      <Drawer.Screen name={NavRoutes.Historic} component={HistoricScreen} />
    </Drawer.Navigator>
  );
}
