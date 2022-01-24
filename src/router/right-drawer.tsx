import React, { VFC } from 'react';
import {
  DrawerScreenProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { RightDrawerContent } from '../components/right-drawer-content';
import { LeftDrawerNavigationProvider } from '../contexts/left-drawer-navigation-context';
import { MainStack } from './main-stack';

type RightDrawerParamList = {
  MainStack: undefined;
};

type RightDrawerProps = DrawerScreenProps<RightDrawerParamList>;

const RightDrawerNavigator = createDrawerNavigator<RightDrawerParamList>();

const RightDrawer: VFC<RightDrawerProps> = ({ navigation }) => (
  <LeftDrawerNavigationProvider navigation={navigation}>
    <RightDrawerNavigator.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}
      drawerContent={(props) => <RightDrawerContent {...props} />}
    >
      <RightDrawerNavigator.Screen name="MainStack" component={MainStack} />
    </RightDrawerNavigator.Navigator>
  </LeftDrawerNavigationProvider>
);

export { RightDrawer };
export type { RightDrawerParamList, RightDrawerProps };
