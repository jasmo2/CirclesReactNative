import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const gradientImg = require('../images/shape_gradient.png');
const movieImg = require('../images/movie.png');
const facebookImg = require('../images/facebook.png');
const goodReadImg = require('../images/goodread.png');
const musicImg = require('../images/mosuc.png');
const circleGradientImg = require('../images/gradient.png');

export default class Circles extends React.Component {
  render() {
    const { size, color, children } = this.props;
    const { 
      container,
      image,
      gradientImgSty,
      circleGradientImgSty,
      iconImgSty,
      goodReadImgSty,
      facebookImgSty,
      musicImgSty,
      movieImgSty
    } = styles;

    return (
      <View style={container}>
        <Image 
          style={gradientImgSty}
          source={gradientImg}
        />
        <Image
          style={[iconImgSty, movieImgSty]} 
          source={movieImg}
        />
        <Image
          style={[iconImgSty, facebookImgSty]} 
          source={facebookImg}
        />
        <Image
          style={[iconImgSty, goodReadImgSty]} 
          source={goodReadImg}
        />
        <Image
          style={[iconImgSty, musicImgSty]} 
          source={musicImg}
        />
        <Image
          style={[gradientImgSty, circleGradientImgSty]} 
          source={circleGradientImg}
        />
      </View>
    );
  }
}

const gradientImgSize = 180;
const IconImgSize = 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  gradientImgSty: {
    width: gradientImgSize,
    height: gradientImgSize,
    position: 'absolute',
    top: 100
  },
  circleGradientImgSty: {
    top: 91,
    width: gradientImgSize * 1.10,
    height: gradientImgSize * 1.10,
  },
  iconImgSty: {
    width: IconImgSize,
    height: IconImgSize,
    position: 'absolute'
  },
  goodReadImgSty: {
    top: 90,
    right: 80
  },
  musicImgSty: {
    top: 90,
    left: 80
  },
  facebookImgSty: {
    top: 35,
    right: 20
  },
  movieImgSty: {
    top: 35,
    left: 20
  }
});
