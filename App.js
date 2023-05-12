/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import ShowHideComp from './Pages/ShowHideComp';


const App = () => {

  return (
    <View>
      <ShowHideComp />
    </View>
  );
};


export default App;
