import { VFC } from 'react';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  DrawerNavigationHelpers,
  DrawerDescriptorMap,
} from '@react-navigation/drawer/lib/typescript/src/types';

type StackScreen<T extends ParamListBase> = VFC<StackScreenProps<T>>;

type DrawerContentProps = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

export type { StackScreen, DrawerContentProps };
