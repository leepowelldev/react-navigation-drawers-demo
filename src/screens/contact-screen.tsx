import { Container } from '../components/container';
import React from 'react';
import { Text, Button } from 'react-native';
import { MainStackScreen } from '../router/main-stack';

const ContactScreen: MainStackScreen = ({ navigation }) => (
  <Container>
    <Text>Contact</Text>
    <Button title="Home" onPress={() => navigation.navigate('Home')} />
    <Button title="About" onPress={() => navigation.navigate('About')} />
    <Button title="Back" onPress={() => navigation.goBack()} />
  </Container>
);

export { ContactScreen };
