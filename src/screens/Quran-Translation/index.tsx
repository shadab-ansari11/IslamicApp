/* eslint-disable prettier/prettier */
import Header from '../../components/Header';
import { View, Text } from 'native-base';
import React from 'react';

interface IQuranTranslation{
  navigation:any
}

 function QuranTranslation(props:IQuranTranslation) {
  const {navigation} = props;
  return (
    <View>
      <Header navigation={navigation} screenName='Quran Translation' takeBack />
      <Text>About</Text>
    </View>
  );
}
export default QuranTranslation;
