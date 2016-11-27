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
import Secret from 'react-native-config';

import PhaseOne from './App/Tutorial/PhaseOne'
import PhaseTwo from './App/Tutorial/PhaseTwo'

function getUserFromApi() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
        console.error("[DEBUG] fetth_error: " + error);
      })
}

export default class TryReact extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      text: 'a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a',
      dataSource: this.ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson',
      ]),
      res: Object,
    };
    this.getUserFromApi();
  }

  getUserFromApi() {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        var movies = responseJson.movies;
        console.log("[DEBUG] movies[0].title:" + movies[0].title)
        var listVIew = (
         <ListView dataSource = {this.ds.cloneWithRows(movies)}
            renderRow = {(rowData) => {
              return (<View>
                <Text>Title{'\t'}: {rowData.title}</Text>
                <Text>Release Year{'\t'}: {rowData.releaseYear} </Text>
                <View style={{height: 8}} />
              </View>)
            }} />
        )
        this.setState({ res: listVIew});
      })
      .catch((error) => {
        console.error("[DEBUG] fetch_error: " + error);
      })
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
        <Text> Film List </Text>
        <View style={{height: 8}} />
        {this.state.res}
        <View style={{height: 16}} />
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('TryReact', () => TryReact);

const API_URL = 'http://10.0.2.2:5000/user/';
