/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button } from 'native-base';
import { Alert, Animated, Easing, TouchableOpacity } from 'react-native';
import Lottie from 'lottie-react-native';
import { TextField } from '../../../components/TextField';
import Feather from 'react-native-vector-icons/Feather';
import AnimatedLottie from '../../../components/Animated-Lottie';
import { useAdminLogin } from './query/useLogin';
import { ILogin, useLoginForm } from './query/useLoginForm';
import Toast from 'react-native-toast-message';
interface ILoginProps {
  navigation: any;
}

export default function Login(props: ILoginProps) {
  const { navigation } = props;
  const {tryLogin} = useAdminLogin();
  const [visible, setVisible] = useState(false);
  const [show, setShow] = React.useState(false);

  const togglePasswordView = () => setShow(s => !s);
  const animationProgress = useRef(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 2,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  const initValues: ILogin = 
  __DEV__
  ?
  {
    email: 'shadab@gmail.com',
    password: '123456',
  }
  : {
    email: '',
    password: '',
  };
 
  const onSubmit = (values: ILogin) => {
    if(values.email != "shadab@gmail.com" || values.password != "123456"){
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        visibilityTime: 25000,
      });
    }else{
      setVisible(true)
      Toast.show({
        type: 'success',
        text1: 'Login Successfully',
        visibilityTime: 25000,
      });
      setTimeout(() => {
          setVisible(false);
          navigation.navigate('DrawerNav');
        }, 3000);
    };
    // if(values){
    //   tryLogin(values);
    //   setVisible(true);
    // }
    // else{
    //   setTimeout(() => {
    //   setVisible(false);
    //   navigation.navigate('DrawerNav');
    // }, 3000);
    // }
    // resetForm();
  };

  const formik = useLoginForm(onSubmit, initValues);
  const {
    values,
    touched,
    errors,
    isSubmitting,
    resetForm,
    handleBlur,
    handleSubmit,
    handleChange,
  } = formik;

  return (
    <View>
      {visible ? (
        <AnimatedLottie text="quran app" />
      ) : (
       <>
      <View justifyContent="center" alignItems="center" mt={65} >
        <Text color="#300759" fontSize={30} fontWeight="bold">Quran App</Text>
        <Text color="#0DB440" fontSize={20} fontWeight="bold">Asalamu Alaikum !!!</Text>
      </View>

      <View width={'100%'} px={16} mt={20}>
        <Text color="#0DB440" fontSize={20} fontWeight="bold">Sign In </Text>
      </View>

      <View justifyContent="center" alignItems="center"  >
        <View width={'100%'} px={16}>
          <TextField
            mt={5}
            placeholder="Email"
            error={touched.email ? errors.email : undefined}
            maxLength={35}
            value={values.email}
            onBlur={handleBlur('email')}
            onChangeText={handleChange('email')}
            width={'100%'}
          />
        </View>
        <View width={'100%'} px={16}>
          <TextField
            mt={5}
            placeholder="Password"
            error={touched.password ? errors.password : undefined}
            maxLength={35}
            value={values.password}
            onBlur={handleBlur('password')}
            onChangeText={handleChange('password')}
            secureTextEntry={!show}
            InputRightElement={
              <TouchableOpacity onPress={togglePasswordView}>
                <View mr={2}>
                  <Feather
                    color="#000"
                    name={show ? 'eye' : 'eye-off'}
                    size={20}
                  />
                </View>
              </TouchableOpacity>
            }
          />
        </View>
          <Animated.View style={{ width: '70%' }}>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={{
                marginTop: 25,
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 10,
                backgroundColor: "#0DB440",
              }}>
              <Text color="#fff" fontSize={15} fontWeight="bold" textAlign="center">
                Sign In
              </Text>
            </TouchableOpacity>
          </Animated.View>

      </View>
       </>
      )}
    </View>
  );
}
