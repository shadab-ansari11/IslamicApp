/* eslint-disable prettier/prettier */
import React from 'react';
import NavContainer from './src/navigation';
import { NativeBaseProvider } from 'native-base';
import * as Sentry from '@sentry/react-native';
import { SSRProvider } from '@react-aria/ssr';

const SubApp = () => {
  return (
    <SSRProvider>
       <NativeBaseProvider>
        <NavContainer />
      </NativeBaseProvider>
    </SSRProvider>
  );
};

function App() {
  return (
    <Sentry.ErrorBoundary>
        <SubApp />
    </Sentry.ErrorBoundary>
  );
}

export default  Sentry.wrap(App);
