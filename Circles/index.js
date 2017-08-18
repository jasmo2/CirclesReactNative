import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Circle from './Circle';

export default class CirclesContainer extends React.Component {
  render() {
    const { subContainer, container, percentage, name } = styles;
    return (
      <View style={container}>
       <Circle size={30} color='#fff' >
        <View style={percentage} >
          86%
        </View>
        <View style={name} >
          Emily vic
        </View>
       </ Circle>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 33,
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});
