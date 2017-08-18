import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Circle from './Circle';

export default class CirclesContainer extends React.Component {
  render() {
    const { subContainer, container, percentage, percentageText, name, nameText } = styles;
    return (
      <View style={container}>
       <Circle size={30} color='#fff' >
        <View style={percentage} >
          <Text style={percentageText}>86%</Text>
        </View>
        <View style={name} >
          <Text style={nameText}>Emily vic</Text>
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
  },
  percentageText: {
    fontSize: 50,
    color: '#fff'
  },
  nameText: {
    fontSize: 16,
    color: '#fff'
  }
});
