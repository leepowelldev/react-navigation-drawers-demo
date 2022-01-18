/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { createContext, FC, useContext, VFC } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type StackScreen<T extends ParamListBase> = VFC<StackScreenProps<T>>;

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <LeftDrawer />
    </NavigationContainer>
  </SafeAreaProvider>
);

/**
 * LEFT DRAWER
 * -----------------------------------------------------------------------------
 */

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

/**
 * RIGHT DRAWER
 * -----------------------------------------------------------------------------
 */

type RightDrawerParamList = {
  RootStack: undefined;
};

type RightDrawerProps = DrawerScreenProps<RightDrawerParamList>;

const RightDrawerNavigator = createDrawerNavigator<RightDrawerParamList>();

const RightDrawer: VFC<RightDrawerProps> = ({ navigation }) => (
  <LeftDrawerContext.Provider value={navigation}>
    <RightDrawerNavigator.Navigator
      initialRouteName="RootStack"
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}
      drawerContent={(props) => <RightDrawerContent {...props} />}
    >
      <RightDrawerNavigator.Screen name="RootStack" component={RootStack} />
    </RightDrawerNavigator.Navigator>
  </LeftDrawerContext.Provider>
);

/**
 * DRAWER HOOKS
 * -----------------------------------------------------------------------------
 */

const LeftDrawerContext = createContext<RightDrawerProps['navigation'] | null>(
  null
);

const RightDrawerContext = createContext<RootStackProps['navigation'] | null>(
  null
);

const useLeftDrawerNavigation = () => {
  return useContext(LeftDrawerContext);
};

const useRightDrawerNavigation = () => {
  return useContext(RightDrawerContext);
};

/**
 * DRAWER CONTENT
 * -----------------------------------------------------------------------------
 */

const LeftDrawerContent: VFC<DrawerContentComponentProps> = ({
  navigation,
}) => (
  <DrawerContentScrollView>
    <Text>Left Drawer Content</Text>
    <DrawerItem label="Close" onPress={() => navigation.closeDrawer()} />
  </DrawerContentScrollView>
);

const RightDrawerContent: VFC<DrawerContentComponentProps> = ({
  navigation,
}) => (
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

/**
 * ROOT STACK
 * -----------------------------------------------------------------------------
 */

type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Contact: undefined;
  SignIn: undefined;
  SignOut: undefined;
  Register: undefined;
};

type RootStackProps = DrawerScreenProps<RootStackParamList>;

const RootStackNavigator = createStackNavigator<RootStackParamList>();

const RootStack: VFC<RootStackProps> = ({ navigation }) => (
  <RightDrawerContext.Provider value={navigation}>
    <RootStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: 'Default Title',
      }}
    >
      <RootStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <RootStackNavigator.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About' }}
      />
      <RootStackNavigator.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: 'Contact' }}
      />
      {/* Auth */}
      <RootStackNavigator.Group screenOptions={{ headerShown: false }}>
        <RootStackNavigator.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: 'Sign In' }}
        />
        <RootStackNavigator.Screen
          name="SignOut"
          component={SignOutScreen}
          options={{ title: 'Sign Out' }}
        />
        <RootStackNavigator.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />
      </RootStackNavigator.Group>
    </RootStackNavigator.Navigator>
  </RightDrawerContext.Provider>
);

type RootStackScreen = StackScreen<RootStackParamList>;

/**
 * HOME SCREEN
 * -----------------------------------------------------------------------------
 */

const HomeScreen: RootStackScreen = ({ navigation }) => {
  const leftDrawerNavigation = useLeftDrawerNavigation();
  const rightDrawerNavigation = useRightDrawerNavigation();

  return (
    <Container>
      <Text>Home</Text>
      <Button title="About" onPress={() => navigation.navigate('About')} />
      <Button title="Contact" onPress={() => navigation.navigate('Contact')} />
      <Button
        title="Open Left Drawer"
        onPress={() => leftDrawerNavigation?.openDrawer()}
      />
      <Button
        title="Open Right Drawer"
        onPress={() => rightDrawerNavigation?.openDrawer()}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </Container>
  );
};

/**
 * ABOUT SCREEN
 * -----------------------------------------------------------------------------
 */

type AboutParamList = {
  History: undefined;
  Family: undefined;
};

const AboutStack = createStackNavigator<AboutParamList>();

const AboutScreen: RootStackScreen = ({ navigation }) => (
  <Container>
    <Text>About</Text>
    <Button title="Home" onPress={() => navigation.navigate('Home')} />
    <View
      style={{
        flex: 1,
        borderWidth: 2,
        borderColor: 'hotpink',
        flexDirection: 'row',
      }}
    >
      <AboutStack.Navigator
        initialRouteName="History"
        screenOptions={{ headerShown: false }}
      >
        <AboutStack.Screen name="History" component={HistoryScreen} />
        <AboutStack.Screen name="Family" component={FamilyScreen} />
      </AboutStack.Navigator>
    </View>
  </Container>
);

type AboutStackScreen = StackScreen<AboutParamList>;

/**
 * HISTORY SCREEN - CHILD OF ABOUT
 * -----------------------------------------------------------------------------
 */

const HistoryScreen: AboutStackScreen = ({ navigation }) => (
  <View>
    <Text>History</Text>
    <Button title="Family" onPress={() => navigation.navigate('Family')} />
  </View>
);

/**
 * FAMILY SCREEN - CHILD OF ABOUT
 * -----------------------------------------------------------------------------
 */

const FamilyScreen: AboutStackScreen = ({ navigation }) => (
  <View>
    <Text>Family</Text>
    <Button title="History" onPress={() => navigation.navigate('History')} />
  </View>
);

/**
 * CONTACT SCREEN
 * -----------------------------------------------------------------------------
 */

const ContactScreen: RootStackScreen = ({ navigation }) => (
  <Container>
    <Text>Contact</Text>
    <Button title="Home" onPress={() => navigation.navigate('Home')} />
  </Container>
);

/**
 * SIGN IN SCREEN
 * -----------------------------------------------------------------------------
 */

const SignInScreen: RootStackScreen = ({ navigation }) => (
  <Container>
    <Text>Sign In</Text>
    <Button title="Home" onPress={() => navigation.navigate('Home')} />
  </Container>
);

/**
 * SIGN OUT SCREEN
 * -----------------------------------------------------------------------------
 */

const SignOutScreen: RootStackScreen = ({ navigation }) => (
  <Container>
    <Button
      title="Sign Out"
      onPress={() =>
        navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] })
      }
    />
  </Container>
);

/**
 * REGISTER SCREEN
 * -----------------------------------------------------------------------------
 */

const RegisterScreen: RootStackScreen = ({ navigation }) => (
  <Container>
    <Text>Register</Text>
    <Button title="Home" onPress={() => navigation.navigate('Home')} />
  </Container>
);

/**
 * UI COMPONENTS
 * -----------------------------------------------------------------------------
 */

const Container: FC = ({ children }) => (
  <SafeAreaView style={styles.outer}>
    <ScrollView
      contentContainerStyle={styles.inner}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={styles.container}>{children}</View>
    </ScrollView>
  </SafeAreaView>
);

/**
 * STYLES
 * -----------------------------------------------------------------------------
 */

const styles = StyleSheet.create({
  outer: {
    borderWidth: 2,
    borderColor: 'red',
    flex: 1,
  },
  inner: {
    borderWidth: 2,
    borderColor: 'blue',
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'green',
  },
});

export default App;
