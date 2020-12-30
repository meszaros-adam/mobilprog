import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import News from './src/news'


const App = () =>(
    <SafeAreaView style= {{flex: 1}}>
      <News title= "News"/>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
  

  export default App
  
