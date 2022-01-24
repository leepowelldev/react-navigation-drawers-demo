import React, { VFC } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { DrawerContentProps } from '../router/router-types';

type RightDrawerContentProps = DrawerContentProps;

const RightDrawerContent: VFC<RightDrawerContentProps> = ({ navigation }) => (
  <DrawerContentScrollView>
    <Text>Right Drawer Content</Text>
    <DrawerItem label="Sign In" onPress={() => navigation.navigate('SignIn')} />
    <DrawerItem
      label="Sign Out"
      onPress={() => navigation.navigate('SignOut')}
    />
    <DrawerItem label="Close" onPress={() => navigation.closeDrawer()} />
    <DrawerItem
      label="Family"
      onPress={() => navigation.navigate('About', { screen: 'Family' })}
    />
  </DrawerContentScrollView>
);

export { RightDrawerContent };
export type { RightDrawerContentProps };
