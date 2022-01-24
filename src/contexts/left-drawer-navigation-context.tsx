import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import React, { createContext, FC, useContext } from 'react';

const LeftDrawerNavigationContext =
  createContext<DrawerNavigationProp<ParamListBase> | null>(null);

type LeftDrawerNavigationProviderProps = {
  navigation: DrawerNavigationProp<ParamListBase>;
};

const LeftDrawerNavigationProvider: FC<LeftDrawerNavigationProviderProps> = ({
  children,
  navigation,
}) => (
  <LeftDrawerNavigationContext.Provider value={navigation}>
    {children}
  </LeftDrawerNavigationContext.Provider>
);

const useLeftDrawerNavigation = () => {
  const { openDrawer, closeDrawer, toggleDrawer } =
    useContext(LeftDrawerNavigationContext) ?? {};

  return {
    openDrawer,
    closeDrawer,
    toggleDrawer,
  };
};

export {
  LeftDrawerNavigationContext,
  LeftDrawerNavigationProvider,
  useLeftDrawerNavigation,
};
