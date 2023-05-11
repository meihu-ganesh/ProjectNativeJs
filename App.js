/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import ExStyles from './style';
import Form from './components/Form';

const App = () => {
  // const [name, setName] = useState("");
  return (
    <View>
      <Form />
    </View>
  );
};


export default App;
