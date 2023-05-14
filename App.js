/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import ModalBox from './Pages/ModalBox';
import PressableLP from './Pages/PressableLP';


const App = () => {

  return (
    <View style={{flex:1}}>
      <PressableLP />
    </View>
  );
};


export default App;
