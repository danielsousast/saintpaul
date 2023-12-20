import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavRoutes} from './NavRoutes';

export interface AppStackParamList {
  [NavRoutes.Home]: undefined;
  [NavRoutes.Quiz]: undefined;
  [NavRoutes.Result]: {
    score: number;
  };
  [NavRoutes.Historic]: undefined;
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  // @ts-ignore
  NativeStackScreenProps<AppStackParamList, RouteName>;
