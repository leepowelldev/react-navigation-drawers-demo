import { Container } from '../components/container';
import { useLeftDrawerNavigation } from '../contexts/left-drawer-navigation-context';
import { useRightDrawerNavigation } from '../contexts/right-drawer-navigation-context';
import React from 'react';
import { Text, Button } from 'react-native';
import { MainStackScreen } from '../router/main-stack';

const HomeScreen: MainStackScreen = ({ navigation }) => {
  const leftDrawerNavigation = useLeftDrawerNavigation();
  const rightDrawerNavigation = useRightDrawerNavigation();

  return (
    <Container>
      <Text>Home</Text>
      <Button title="About" onPress={() => navigation.navigate('About')} />
      <Button title="Contact" onPress={() => navigation.navigate('Contact')} />
      <Button
        title="Open Left Drawer"
        onPress={() => leftDrawerNavigation?.openDrawer?.()}
      />
      <Button
        title="Open Right Drawer"
        onPress={() => rightDrawerNavigation?.openDrawer?.()}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </Container>
  );
};

export { HomeScreen };
