/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/**
 * @format
 */
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {IconButton, Text, View} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


interface IHeader {
  screenName?: string;
  navigation: any;
  takeBack?: boolean;
  isDrawer?: boolean;
}

export default function Header(props: IHeader) {
  const {screenName, navigation, takeBack, isDrawer} = props;

  return (
    <View justifyContent="center" key="common-header">
      <View
        px={3}
        backgroundColor="#09223a"
        flexDirection="row"
        height={60}
        justifyContent="space-between"
        width="100%">
        {isDrawer && (
          <View alignItems="center" justifyContent="center">
            <IconButton
              alignItems="center"
              icon={<MaterialIcons color="white" name="menu" size={20} />}
              justifyContent="center"
              testID="DrawerIcon"
              onPress={navigation.openDrawer}
            />
          </View>
        )}
        {takeBack && (
          <View justifyContent="center">
            <IconButton
              onPress={() => navigation.goBack()}
              alignItems="center"
              icon={<Ionicons color="white" name="chevron-back-outline" size={25} />}
              justifyContent="center"
            />
          </View>
        )}

        <View justifyContent="center">
          <Text fontSize={20} color="#fff">
            {screenName}
          </Text>
        </View>
        <View alignItems="center" flexDir="row" justifyContent="center">
          
          <View pr={1}>
            <TouchableOpacity>
              <View
                borderColor="#000"
                borderWidth="1px"
                width={8}
                height={8}
                borderRadius={360}
                backgroundColor="#ffffff"
                alignItems="center"
                justifyContent="center">
                <Text fontSize={16} color="#0d6efd" fontWeight="bold">
                  SA
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}