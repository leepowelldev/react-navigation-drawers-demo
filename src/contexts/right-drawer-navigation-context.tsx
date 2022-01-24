import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import React, { createContext, FC, ReactElement, useContext } from 'react';

const RightDrawerNavigationContext =
  createContext<DrawerNavigationProp<ParamListBase> | null>(null);

type RightDrawerNavigationProviderProps = {
  navigation: DrawerNavigationProp<ParamListBase>;
  children: ReactElement;
};

const RightDrawerNavigationProvider: FC<RightDrawerNavigationProviderProps> = ({
  children,
  navigation,
}) => (
  <RightDrawerNavigationContext.Provider value={navigation}>
    {children}
  </RightDrawerNavigationContext.Provider>
);

const useRightDrawerNavigation = () => {
  const { openDrawer, closeDrawer, toggleDrawer } =
    useContext(RightDrawerNavigationContext) ?? {};

  return {
    openDrawer,
    closeDrawer,
    toggleDrawer,
  };
};

export {
  RightDrawerNavigationContext,
  RightDrawerNavigationProvider,
  useRightDrawerNavigation,
};
