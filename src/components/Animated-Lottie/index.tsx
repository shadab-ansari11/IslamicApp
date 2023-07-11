/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, { useEffect, useRef } from 'react';
import { View, Image, Text } from 'native-base';
import { Animated, Easing } from 'react-native';
import Lottie from 'lottie-react-native';

interface IAnimatedLottie {
    text?: string;
}

function AnimatedLottie(props: IAnimatedLottie) {
    const { text } = props;
    const animationProgress = useRef(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(animationProgress.current, {
            toValue: 2,
            duration: 4000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, []);
    return (
        <View justifyContent="center" alignItems="center">
            <View justifyContent="center" alignItems="center" mt={100}>
                <Image
                    source={require('../../assets/SplashScreen/mosque-logo.png')}
                    alt="mosque"
                />
            </View>
            <View>
                {text ?
                    <Text
                        textTransform="uppercase"
                        textAlign="center"
                        color="#fff"
                        fontSize={30}
                        fontWeight="bold">
                        {text}
                    </Text>
                    : null}
            </View>
            <Animated.View>
                <Lottie
                    progress={animationProgress.current}
                    source={require('../../assets/AnimationLoding/97930-loading.json')}
                    style={{ width: '40%' }}
                    autoPlay
                    loop={true}
                />
            </Animated.View>
        </View>
    );
}
export default AnimatedLottie;