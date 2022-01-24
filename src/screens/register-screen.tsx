import { Container } from '../components/container';
import React from 'react';
import { Text, Button } from 'react-native';
import { MainStackScreen } from '../router/main-stack';

const RegisterScreen: MainStackScreen = ({ navigation }) => (
  <Container>
    <Text>Register</Text>
    <Button title="Home" onPress={() => navigation.navigate('Home')} />
  </Container>
);

export { RegisterScreen };
