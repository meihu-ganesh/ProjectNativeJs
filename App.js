/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Loader from './Pages/Loader';


const App = () => {

  return (
    <View style={{flex:1}}>
      <Loader />
    </View>
  );
};


export default App;
