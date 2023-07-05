/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, Button } from 'native-base';
import { Animated, Easing } from 'react-native';
import Lottie from 'lottie-react-native';

interface ISplashScreen {
    navigation: any
}

function SplashScreen(props: ISplashScreen) {
    const { navigation } = props;
    const animationProgress = useRef(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(animationProgress.current, {
            toValue: 2,
            duration: 3500,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, []);

    const [visible, setVisible] = useState(false);

    const handleLoading = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Login');
        }, 3500);
    };

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
                        source={require('../../assets/SplashScreen/mosque-logo.png')}
                        alt="mosque"
                    />
                </View>
                <View>
                    {visible ? (
                        <Animated.View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Lottie
                                progress={animationProgress.current}
                                source={require('../../assets/AnimationLoding/99274-loading.json')}
                                style={{ width: '80%' }}
                                autoPlay
                                loop={true}
                            />
                        </Animated.View>
                    ) : (
                        <Animated.View>
                            <Button
                                onPress={handleLoading}
                                backgroundColor="#0DB440"
                                pt={4}
                                pb={4}
                                pl={10}
                                pr={10}
                                borderRadius={50}
                            >
                                <Text color="#fff" fontSize={14} fontWeight="bold">
                                    Get started
                                </Text>
                            </Button>
                        </Animated.View>)
                    }
                </View>
            </View>
        </View>
    );
}

export default SplashScreen;
