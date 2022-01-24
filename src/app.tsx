import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from './router/router';

const App = () => (
  <SafeAreaProvider>
    <Router />
  </SafeAreaProvider>
);

export { App };
