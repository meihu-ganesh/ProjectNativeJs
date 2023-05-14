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
import StackPage1 from './Pages/StackPage1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import HeaderSearch from './components/HeaderSearch';

const Stack = createNativeStackNavigator();

const App = () => {

  const btnPressed = () => {
    console.warn('btn pressed');
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#abf",
          },
          headerTitleStyle: {
            fontSize: 24,
          },
          headerTintColor: '#ff9'
        }}
      >
        <Stack.Screen name="Login" component={LoginPage} 
          options={{
            headerTitle:()=> <Button title="Left" onPress={btnPressed} />,
            headerRight: ()=> <HeaderSearch />,
            title: 'User Login',
          }}
        />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
    // <HomePage />
    // <LoginPage />
    // <StackPage1 />
  );
};


export default App;
