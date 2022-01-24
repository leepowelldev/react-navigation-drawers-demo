import React, { VFC } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { DrawerContentProps } from '../router/router-types';

type LeftDrawerContentProps = DrawerContentProps;

const LeftDrawerContent: VFC<LeftDrawerContentProps> = ({ navigation }) => (
  <DrawerContentScrollView>
    <Text>Left Drawer Content</Text>
    <DrawerItem label="Close" onPress={() => navigation.closeDrawer()} />
  </DrawerContentScrollView>
);

export { LeftDrawerContent };
export type { LeftDrawerContentProps };
