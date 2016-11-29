/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ListView,
  Navigator
} from 'react-native';

import PhaseOne from './App/Tutorial/PhaseOne'
import PhaseTwo from './App/Tutorial/PhaseTwo'
import PhaseThree from './App/Tutorial/PhaseThree'

export default class TryReact extends Component {
  render() {
    return (
      // <PhaseOne />
      // <PhaseTwo />
      // <PhaseThree />
      <Navigator 
        initialRoute = {{ title: 'First Scene', index : 0 }}
        renderScene = {(route, navigator) => 
          <PhaseThree 
            title = {route.title}            
            onForward = {() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Second Scene',
                index: nextIndex,
              });
            }}

            onBack = {() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
}

AppRegistry.registerComponent('TryReact', () => TryReact);

const API_URL = 'http://10.0.2.2:5000/user/';
