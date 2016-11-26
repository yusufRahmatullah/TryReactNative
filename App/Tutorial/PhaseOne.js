import React, { Component } from 'react';
import { Button, Card } from 'react-native-material-design';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import Blink from '../../App/Tutorial/Blink'
import Greeting from '../../App/Tutorial/Greeting'

export default class PhaseOne extends Component {
	render() {
    	return (
	      <View style={styles.container}>
	        <Greeting name='Yusuf' address='Panglayungan' />
	        <Text style={styles.instructions}>
	          Double tap R on your keyboard to reload,{'\n'}
	          Shake or press menu button for dev menu {'\n'}
	        </Text>
	        <Blink text='blink test' modifier={50} />
	        <Blink text='is blink same?' modifier={150} />
	        <Blink text='i think its different' modifier={0} />
	        <Image source={CONST.pic} style={styles.image} />

	        <View style={{width: 60, height: 10, backgroundColor: 'powderblue'}} />
	        <View style={{width: 80, height: 20, backgroundColor: 'skyblue'}} />
	        <View style={{width: 100, height: 30, backgroundColor: 'steelblue'}} />

	      </View>
	    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  image: {
    width: 193,
    height: 110
  },
});

const CONST = {
  pic : {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  },
  pic2 : {
    uri: 'http://2.bp.blogspot.com/-bvWJWZJIl0Q/T-26kww4GpI/AAAAAAAAA5A/874DJxcNECU/s1600/Contoh+Gambar+Motif+Bunga+Untuk+Bordir.JPG'
  },
};