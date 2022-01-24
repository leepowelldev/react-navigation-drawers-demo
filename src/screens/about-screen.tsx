import { Container } from '../components/container';
import React from 'react';
import { Text, Button, View } from 'react-native';
import { AboutStack } from '../router/about-stack';
import { MainStackScreen } from '../router/main-stack';

const AboutScreen: MainStackScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>About</Text>
      <Text>{JSON.stringify(navigation.getState().routes)}</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <View
        style={{
          flex: 1,
          borderWidth: 2,
          borderColor: 'hotpink',
          flexDirection: 'row',
        }}
      >
        <AboutStack />
      </View>
    </Container>
  );
};

export { AboutScreen };
