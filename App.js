/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import ResponsiveFlexUI from './Pages/ResponsiveFlexUI';

// import ResponsiveFlex from './Pages/ResponsiveFlex';

const App = () => {

  return (
    <View style={{flex:1}}>
      
        {/* <View style={{ backgroundColor:'green'}}></View>
        <View style={{ backgroundColor:'red'}}></View> */}
      <ResponsiveFlexUI />

    </View>
  );
};


export default App;
