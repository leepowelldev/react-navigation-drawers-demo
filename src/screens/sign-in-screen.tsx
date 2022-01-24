import { Container } from '../components/container';
import React from 'react';
import { Text, Button } from 'react-native';
import { MainStackScreen } from '../router/main-stack';

const SignInScreen: MainStackScreen = ({ navigation }) => (
  <Container>
    <Text>Sign In</Text>
    <Button title="Home" onPress={() => navigation.navigate('Home')} />
  </Container>
);

export { SignInScreen };
