/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import ExStyles from './style';
import APIPlaying from './components/APIPlaying';


const App = () => {


  return (
    <View>
      <APIPlaying />
    </View>
  );
};


export default App;
