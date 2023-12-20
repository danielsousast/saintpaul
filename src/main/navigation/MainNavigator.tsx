import QuizScreen from '@/presentation/screens/QuizScreen/QuizScreen';
import ResultScreen from '@/presentation/screens/ResultScreen/ResultScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavRoutes} from './NavRoutes';
import HistoricScreen from '@/presentation/screens/HistoricScreen/HistoricScreen';
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
        <Stack.Screen name={NavRoutes.Historic} component={HistoricScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
