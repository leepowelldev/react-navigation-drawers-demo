import { DrawerScreenProps } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { RightDrawerNavigationProvider } from '../contexts/right-drawer-navigation-context';
import React, { VFC } from 'react';
import { AboutScreen } from '../screens/about-screen';
import { ContactScreen } from '../screens/contact-screen';
import { HomeScreen } from '../screens/home-screen';
import { RegisterScreen } from '../screens/register-screen';
import { SignInScreen } from '../screens/sign-in-screen';
import { SignOutScreen } from '../screens/sign-out-screen';
import { StackScreen } from './router-types';

type MainStackParamList = {
  Home: undefined;
  About: undefined;
  Contact: undefined;
  SignIn: undefined;
  SignOut: undefined;
  Register: undefined;
};

type MainStackScreen = StackScreen<MainStackParamList>;

type MainStackProps = DrawerScreenProps<MainStackParamList>;

const MainStackNavigator = createStackNavigator<MainStackParamList>();

const MainStack: VFC<MainStackProps> = ({ navigation }) => (
  <RightDrawerNavigationProvider navigation={navigation}>
    <MainStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: 'Default Title',
      }}
    >
      <MainStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <MainStackNavigator.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About' }}
      />
      <MainStackNavigator.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: 'Contact' }}
      />
      {/* Auth */}
      <MainStackNavigator.Group screenOptions={{ headerShown: false }}>
        <MainStackNavigator.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: 'Sign In' }}
        />
        <MainStackNavigator.Screen
          name="SignOut"
          component={SignOutScreen}
          options={{ title: 'Sign Out' }}
        />
        <MainStackNavigator.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />
      </MainStackNavigator.Group>
    </MainStackNavigator.Navigator>
  </RightDrawerNavigationProvider>
);

export { MainStack };
export type { MainStackProps, MainStackParamList, MainStackScreen };
