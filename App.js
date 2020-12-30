import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import News from './src/news'
import { FavouritesProvider } from './src/utils/FavouritesContext';


const App = () =>(
    <SafeAreaView style= {{flex: 1}}>
      <FavouritesProvider>
      <News title= "News"/>
      </FavouritesProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
  

  export default App