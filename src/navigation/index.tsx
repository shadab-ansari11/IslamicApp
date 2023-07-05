/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

//screen
import Login from '../screens/Auth/Login';
import Home from '../screens/Home';
import DrawerNav from '../navigation/DrawerNav';
import SplashScreen from '../screens/SplashScreen';

export type RootStackParamList = {
    Login: undefined;
    DrawerNav: undefined;
    Home: undefined;
    SplashScreen: undefined;
};
  const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavContainer() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen component={SplashScreen} name="SplashScreen" />
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={DrawerNav} name="DrawerNav" />
          <Stack.Screen component={Home} name="Home" />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
