import React from 'react';
import { View, Text, Button } from 'react-native';
import { AboutStackScreen } from '../router/about-stack';

const FamilyScreen: AboutStackScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Family</Text>
      <Text>{JSON.stringify(navigation.getState().routes)}</Text>
      <Button title="History" onPress={() => navigation.navigate('History')} />
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button
        title="Reset"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Contact' }],
          })
        }
      />
    </View>
  );
};

export { FamilyScreen };
