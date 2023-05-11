/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Alert, Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import ExStyles from './style';

const App = () => {
  
  const users=[
    {
      id:1,
      name: 'Ganu'
    },
    {
      id:2,
      name: 'Ganesh'
    },
    {
      id:3,
      name: 'Chitikesh'
    },
    {
      id:4,
      name: 'Sai Naga Raju'
    },
  ];

  return (
    <View>
      <Text style={{fontSize:30}}>List with Flat List Component</Text>
      <FlatList 
        data={users}
        renderItem={({item})=><Text style={ExStyles.item}>{item.name}</Text>}
        keyExtractor={item=>item.id}
      />
    </View>
  );
};


export default App;
