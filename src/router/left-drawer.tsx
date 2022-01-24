import React, { VFC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LeftDrawerContent } from '../components/left-drawer-content';
import { RightDrawer } from './right-drawer';

type LeftDrawerParamList = {
  RightDrawer: undefined;
};

const LeftDrawerNavigator = createDrawerNavigator<LeftDrawerParamList>();

const LeftDrawer: VFC = () => (
  <LeftDrawerNavigator.Navigator
    initialRouteName="RightDrawer"
    screenOptions={{
      drawerPosition: 'left',
      headerShown: false,
    }}
    drawerContent={(props) => <LeftDrawerContent {...props} />}
  >
    <LeftDrawerNavigator.Screen name="RightDrawer" component={RightDrawer} />
  </LeftDrawerNavigator.Navigator>
);

export { LeftDrawer };
export type { LeftDrawerParamList };
