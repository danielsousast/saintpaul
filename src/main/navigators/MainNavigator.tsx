import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ResultScreen, QuizScreen} from '@/presentation/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerNavigator} from './DrawerNavigator';
import {NavRoutes} from '../utils/NavRoutes';

const Stack = createNativeStackNavigator();

export const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={NavRoutes.Settings} component={DrawerNavigator} />
        <Stack.Screen name={NavRoutes.Quiz} component={QuizScreen} />
        {/* @ts-ignore */}
        <Stack.Screen name={NavRoutes.Result} component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
