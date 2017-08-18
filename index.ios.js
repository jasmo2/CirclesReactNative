/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Circles from './Circles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer} />

        <View style={{flex: 33}}>
          <Circles />
        </View>

        <View style={styles.subContainer} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 33,
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

AppRegistry.registerComponent('CiclesProject', () => App);
