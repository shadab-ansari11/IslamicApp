/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button } from 'native-base';

interface ILogin{
    navigation:any;
}

export default function Login(props:ILogin) {
    const { navigation } = props;
  return (
    <View justifyContent="center" alignItems="center" flex={1}>
         <Text>Login</Text>
      <Button size="sm" width={100} onPress={()=> navigation.navigate('DrawerNav')}>Submit</Button>
    </View>
  );
}
