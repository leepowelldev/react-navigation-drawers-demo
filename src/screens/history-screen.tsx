import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { AboutStackScreen } from '../router/about-stack';

const HistoryScreen: AboutStackScreen = ({ navigation }) => {
  const [state, setState] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setState((x) => x + 1);
    }, [])
  );

  return (
    <View>
      <Text>History</Text>
      <Text>{state}</Text>
      <Button title="Family" onPress={() => navigation.navigate('Family')} />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export { HistoryScreen };
