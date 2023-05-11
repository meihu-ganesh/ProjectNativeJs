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
    {
      id:5,
      name: 'NagRaju'
    },
    {
      id:6,
      name: 'Nagin'
    },
    {
      id:7,
      name: 'Kat Raj'
    },
    {
      id:8,
      name: 'Sai'
    },
    {
      id:9,
      name: 'SN Raju'
    },
    {
      id:10,
      name: 'Chitikesh Sai Naga Raju'
    },
    {
      id:4,
      name: 'Sai Naga'
    },
  ];

  return (
    <View>
      <Text style={{fontSize:30}}>List with Map Function</Text>
      <ScrollView style={{marginBottom:40}}>
      {
        users.map((item)=><Text style={ExStyles.item}>{item.name}</Text>)
      }
      </ScrollView>
    </View>
  );
};


export default App;
