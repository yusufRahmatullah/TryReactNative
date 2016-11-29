/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ListView,
  TouchableHighlight
} from 'react-native';

export default class PhaseThree extends Component {
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
      <View>
        <Text>Current Scene: {this.props.title}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text> Next Scene </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text> Previous Scene </Text>
        </TouchableHighlight>
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
      </View>
    );
  }
}

PhaseThree.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

const API_URL = 'http://10.0.2.2:5000/user/';