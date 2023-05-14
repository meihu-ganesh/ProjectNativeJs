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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <TopTab.Navigator>
        <TopTab.Screen name='Login' component={LoginTab}/>
        <TopTab.Screen name='Sign Up' component={SignupTab}/>
        <TopTab.Screen name='Other' component={SignupTab}/>
      </TopTab.Navigator>
    </NavigationContainer>
    // <LoginTab />
    // <SignupTab />
  );
};


export default App;
