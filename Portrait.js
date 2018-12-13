/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Orientation from 'react-native-orientation';
import Navigation from 'react-navigation';

export default class App extends Component {
  static navigatorStyle = {
    orientation: 'portrait',
  };

  componentDidMount() {
    //console.log('port');
    //Orientation.lockToPortrait();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Landscape' onPress={() => {
            this.props.navigation.navigate('LScreen');
            Orientation.lockToLandscape();
          }} 
        />
        <Button title='Liberar' onPress={() => {
            Orientation.unlockAllOrientations();
          }} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
