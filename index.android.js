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
  ListView
} from 'react-native';

import PhaseOne from './App/Tutorial/PhaseOne'
import PhaseTwo from './App/Tutorial/PhaseTwo'

export default class TryReact extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      text: 'a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a',
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson',
      ])
    };
  }

  render() {
    return (
      // <PhaseOne />
      // <PhaseTwo />
      <ScrollView style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          value = {this.state.text}
          onChangeText={(text) => this.setState({text})} />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <ListView 
          dataSource = {this.state.dataSource}
          renderRow = {(rowData) => <Text>{rowData}</Text>} />
          <View style={{height: 16}} />
      </ScrollView>
    );
  }
}



AppRegistry.registerComponent('TryReact', () => TryReact);
