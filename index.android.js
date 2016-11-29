/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import PhaseOne from './App/Tutorial/PhaseOne'
import PhaseTwo from './App/Tutorial/PhaseTwo'
import PhaseThree from './App/Tutorial/PhaseThree'
import PhaseFour from './App/Tutorial/PhaseFour'

export default class TryReact extends Component {
  render() {
    return (
      // <PhaseOne /> // Blink Text
      // <PhaseTwo /> // View Styling
      // <PhaseThree /> // List, Data fetch, ScrollView
      <PhaseFour /> // Navigator, Image
    );
  }
}

AppRegistry.registerComponent('TryReact', () => TryReact);