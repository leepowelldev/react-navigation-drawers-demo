import { NavigationContainer } from '@react-navigation/native';
import React, { VFC } from 'react';
import { LeftDrawer } from './left-drawer';

const Router: VFC = () => (
  <NavigationContainer>
    <LeftDrawer />
  </NavigationContainer>
);

export { Router };
