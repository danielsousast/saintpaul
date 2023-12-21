import React from 'react';
import {ResultScreen, QuizScreen} from '@/presentation/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavRoutes} from './NavRoutes';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* @ts-ignore */}
        <Stack.Screen name={NavRoutes.Settings} component={DrawerNavigator} />
        <Stack.Screen name={NavRoutes.Quiz} component={QuizScreen} />
        {/* @ts-ignore */}
        <Stack.Screen name={NavRoutes.Result} component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
