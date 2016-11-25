import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

export default class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = {showText: true}

    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 500 + this.props.modifier);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
      );
  }
}
