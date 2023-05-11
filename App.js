/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import ExStyles from './style';

const App = () => {

  return (
    <View>
      <Text style={{fontSize: 30, color: '#ff00ff', backgroundColor: '#c0ffa2'}} > Styles in React Native</Text>
      <Text style={styles.textBox} > Styles in React Native</Text>
      <Text style={{fontSize: 30, color: '#ff00ff'}} > Styles in React Native</Text>
      <Text style={ExStyles.textBox} > Styles in React Native</Text>
      <Text style={[styles.textBox, ExStyles.textBox, {marginTop:50}]} > Styles in React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    color: '#d09000',
    fontSize: 25,
    fontWeight: '500',
    backgroundColor: '#ffc0ff',
    margin: 6,
    padding: 10,
    borderWidth: 5,
    borderColor: 'red',
    borderStyle: 'dotted',
    borderRadius: 25,
    height: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})

export default App;
