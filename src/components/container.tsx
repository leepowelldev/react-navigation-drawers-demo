import React, { FC } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';

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

export { Container };
