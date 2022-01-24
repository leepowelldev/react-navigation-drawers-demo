import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FamilyScreen } from '../screens/family-screen';
import { HistoryScreen } from '../screens/history-screen';
import { StackScreen } from './router-types';

type AboutStackParamList = {
  History: undefined;
  Family: undefined;
};

type AboutStackScreen = StackScreen<AboutStackParamList>;

const AboutStackNavigator = createStackNavigator<AboutStackParamList>();

const AboutStack = () => (
  <AboutStackNavigator.Navigator
    initialRouteName="History"
    screenOptions={{ headerShown: false }}
  >
    <AboutStackNavigator.Screen name="History" component={HistoryScreen} />
    <AboutStackNavigator.Screen name="Family" component={FamilyScreen} />
  </AboutStackNavigator.Navigator>
);

export { AboutStack };
export type { AboutStackScreen, AboutStackParamList };
