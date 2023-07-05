/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import { View, Text, Button } from 'native-base';


interface IHome{
    navigation:any;
}
export default function Home(props: IHome) {
    const {navigation} = props;

  return (
    <View justifyContent="center" alignItems="center" flex={1}>
      <Text>Home</Text>
    </View>
  );
}
