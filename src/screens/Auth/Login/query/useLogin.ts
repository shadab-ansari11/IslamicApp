/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import client from '../../../../utils/ApiClient';
import Toast from 'react-native-toast-message';

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  data: string;
  statusCode: number;
  message: string;
}

const useAdminLogin = () => {
  const tryLogin = async (values:ILoginRequest) => {
    try {
      const url = "https://api.escuelajs.co/api/v1/auth/login";
      const response: ILoginResponse = await client.post(url, values);
      console.log("response",JSON.stringify(response,null,2))
      if (response?.statusCode === 200) {
        Toast.show({
          type: 'success',
          text1: 'Login Successfully',
          visibilityTime: 25000,
        });
      }
    } catch (err: any) {
      console.log('', err);
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        visibilityTime: 25000,
      });
    }
  };

  return {
    tryLogin,
  };
};

export {useAdminLogin};
