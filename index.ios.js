/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Circles from './Circles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View>
          <Circles />
        </View>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('CiclesProject', () => App);
