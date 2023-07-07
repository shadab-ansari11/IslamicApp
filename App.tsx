/* eslint-disable prettier/prettier */
import React from 'react';
import NavContainer from './src/navigation';
import { NativeBaseProvider } from 'native-base';
import * as Sentry from '@sentry/react-native';
import { SSRProvider } from '@react-aria/ssr';
import {QueryClient, QueryClientProvider} from 'react-query';
import Toast from 'react-native-toast-message';


const queryClient = new QueryClient();

const SubApp = () => {
  return (
    <SSRProvider>
       <NativeBaseProvider>
        <NavContainer />
      </NativeBaseProvider>
      <Toast/>
    </SSRProvider>
  );
};

function App() {
  return (
    <Sentry.ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SubApp />
      </QueryClientProvider>
    </Sentry.ErrorBoundary>
  );
}

export default  Sentry.wrap(App);
