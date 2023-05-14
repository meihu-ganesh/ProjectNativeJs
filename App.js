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
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginTab from './components/LoginTab';
import SignupTab from './components/SignupTab';

const Tab = createBottomTabNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Login' component={LoginTab}/>
        <Tab.Screen name='sign Up' component={SignupTab}/>
      </Tab.Navigator>
    </NavigationContainer>
    // <LoginTab />
    // <SignupTab />
  );
};


export default App;
