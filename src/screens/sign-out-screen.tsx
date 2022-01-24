import { Container } from '../components/container';
import React from 'react';
import { Button } from 'react-native';
import { MainStackScreen } from '../router/main-stack';

const SignOutScreen: MainStackScreen = ({ navigation }) => (
  <Container>
    <Button
      title="Sign Out"
      onPress={() =>
        navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] })
      }
    />
  </Container>
);

export { SignOutScreen };
