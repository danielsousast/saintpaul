import React from 'react';
import HistoricScreen from '@/presentation/screens/HistoricScreen/HistoricScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavRoutes} from './NavRoutes';
import {HomeScreen} from '@/presentation/screens/HomeScreen/HomeScreen';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: true,

        headerShown: false,
      }}>
      <Drawer.Screen
        name={NavRoutes.Home}
        component={HomeScreen}
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
