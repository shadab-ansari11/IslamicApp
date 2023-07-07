/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, Image } from 'native-base';


interface ISplashScreen {
    navigation: any
}

function SplashScreen(props: ISplashScreen) {
    const { navigation } = props;
  setTimeout(()=>{
    navigation.replace("Login");
  },4000)
 
    return (
        <View backgroundColor="#DAD0E1" width={'100%'} height={'100%'}>
            <Text
                textTransform="uppercase"
                textAlign="center"
                color="#300759"
                fontSize={30}
                fontWeight="bold"
                mt={100}
            >
                quran App
            </Text>
            <View justifyContent="center" alignItems="center">
                <Text
                    textAlign="center"
                    color="#000"
                    fontSize={18}
                    width={200}
                    fontWeight="bold"
                >
                    Learn Quran every day and recite once everyday
                </Text>
            </View>
            <View justifyContent="center" alignItems="center">
                <View justifyContent="center" alignItems="center">
                    <Image
                        source={require('../assets/SplashScreen/mosque-logo.png')}
                        alt="mosque"
                    />
                </View>
            </View>
        </View>
    );
}

export default SplashScreen;
