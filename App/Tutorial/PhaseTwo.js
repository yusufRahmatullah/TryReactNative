import React, { Component } from 'react';
import { Button, Card } from 'react-native-material-design';
import {
  AppRegistry,
  View
} from 'react-native';

export default class PhaseTwo extends Component {
	render() {
    	return (
	     <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{flex:1, backgroundColor: 'powderblue'}}>
          <View style={{width: 25, height: 25, backgroundColor: '#ff0000'}} />
          <View style={{width: 25, height: 25, backgroundColor: '#ff8181'}} />
          <View style={{width: 25, height: 25, backgroundColor: '#ffef51'}} />
        </View>
        <View style={{flex:1, backgroundColor: 'skyblue', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <View style={{width: 25, height: 25, backgroundColor: '#ff0000'}} />
          <View style={{width: 25, height: 25, backgroundColor: '#ff8181'}} />
          <View style={{width: 25, height: 25, backgroundColor: '#ffef51'}} />
        </View>
        <View style={{flex:1, backgroundColor: 'steelblue', justifyContent: 'space-around', alignItems: 'center'}}>
          <View style={{width: 25, height: 25, backgroundColor: '#ff0000'}} />
          <View style={{width: 25, height: 25, backgroundColor: '#ff8181'}} />
          <View style={{width: 25, height: 25, backgroundColor: '#ffef51'}} />
        </View>
        <View style={{flex:1, backgroundColor: 'powderblue', justifyContent: 'flex-start'}}>
          <View style={{width: 25, height: 25, backgroundColor: '#ff0000'}} />
          <View style={{width: 25, height: 25, backgroundColor: '#ff8181'}} />
          <View style={{width: 25, height: 25, backgroundColor: '#ffef51'}} />
        </View>
        <View style={{flex:1, backgroundColor: 'skyblue', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'stretch'}}>
          <View style={{width: 25, backgroundColor: '#ff0000'}} />
          <View style={{width: 25, backgroundColor: '#ff8181'}} />
          <View style={{width: 25, backgroundColor: '#ffef51'}} />
        </View>
        <View style={{flex:1, flexDirection: 'column', backgroundColor: 'steelblue', alignItems: 'flex-start'}}>
          <View style={{width: 25, height: 25, backgroundColor: '#ff0000'}} />
          <View style={{width: 25, height: 25, backgroundColor: '#ff8181'}} />
          <View style={{width: 25, height: 25, backgroundColor: '#ffef51'}} />
        </View>
      </View>
	    );
    }
}