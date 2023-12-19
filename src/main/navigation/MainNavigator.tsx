import {HomeScreen} from '@/presentation/screens/HomeScreen/HomeScreen';
import QuizScreen from '@/presentation/screens/QuizScreen/QuizScreen';
import ResultScreen from '@/presentation/screens/ResultScreen/ResultScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavRoutes} from './NavRoutes';

const Stack = createNativeStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* @ts-ignore */}
        <Stack.Screen name={NavRoutes.Home} component={HomeScreen} />
        <Stack.Screen name={NavRoutes.Quiz} component={QuizScreen} />
        {/* @ts-ignore */}
        <Stack.Screen name={NavRoutes.Result} component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
