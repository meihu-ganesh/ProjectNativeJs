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
import WebView from 'react-native-webview';
import CustomModal from './Pages/CustomModal';

const App = () => {

  return (
    <CustomModal />
  );
};


export default App;
