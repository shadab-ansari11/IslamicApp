/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/**
 * @format
 */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer';

import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '.';
import Home from '../screens/Home/Home';
import About from '../screens/About';
import DrawerWithButtons from './DrawerWithButtons';

export type DrawerParamList = {
  Home: undefined;
  About: undefined;
};

export type DrawerNavProps<T extends keyof DrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<DrawerParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootStackNavigationProps<Screen extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, Screen>;

export type AppNavigationType<T extends keyof DrawerParamList> =
  CompositeNavigationProp<
    DrawerNavigationProp<DrawerParamList, T>,
    NativeStackNavigationProp<RootStackParamList>
  >;
export type DrawerNavigationType = DrawerNavigationProp<DrawerParamList, any>

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home" drawerContent={(props) => <DrawerWithButtons {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen component={Home} name="Home" />
      <Drawer.Screen component={About} name="About" />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
