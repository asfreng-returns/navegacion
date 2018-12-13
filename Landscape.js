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

export default class App extends Component {
  static navigatorStyle = {
    orientation: 'landscape',
  };

  componentDidMount() {
    //console.log('land');
    //Orientation.lockToLandscape();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Portrait' onPress={() => {
            this.props.navigation.navigate('PScreen');
            Orientation.lockToPortrait();
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
