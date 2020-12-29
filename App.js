import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import News from './src/news'

const App = () =>(
    <SafeAreaView>
      <News text="text"/>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
  

  export default App
  
