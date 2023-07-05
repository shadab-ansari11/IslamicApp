/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { View, Text } from 'native-base';
import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';


export default function DrawerWithButtons(props: DrawerContentComponentProps) {
    const { navigation } = props;

  return (
    <View>
      <Text>Drawer Buttons heres</Text>
    </View>
  );
}
