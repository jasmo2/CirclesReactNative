import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg,{
  Circle,
  Ellipse,
  RadialGradient,
  Text,
  Defs,
  Stop
} from 'react-native-svg';

export default class Circles extends React.Component {
  render() {
    const { size, color, children } = props;
    const { container } = styles;
    const radius = size/2;

    return (
      <View style={[container, circleStyles]}>
        <Svg
          height="150"
          width="300"
        >
          <Defs>
            <RadialGradient id="grad" 
              cx={radius} 
              cy={radius}
              rx={radius}
              ry={radius}
              fx={radius} 
              fy={radius}
              gradientUnits="userSpaceOnUse"
            >
              <Stop
                offset="0"
                stopColor="#52ecff"
                stopOpacity="1"
              />
              <Stop
                offset="0.05"
                stopColor="rgba(82, 236, 228, 0.5)"
                stopOpacity="1"
              />
              <Stop
                offset="0.1"
                stopColor="rgba(0, 0, 0, 0)"
                stopOpacity="1"
              />
            </RadialGradient>
          </Defs>
          <Ellipse cx={radius} cy={radius} rx={radius} ry={radius} fill="url(#grad)" />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(82, 236, 228, 0.8)'
  }
});
