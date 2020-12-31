import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import News from './src/news'
import Favourites from './src/favourites'
import NewsView from './src/newsView'
import { FavouritesProvider } from './src/utils/FavouritesContext';
import { NewsProvider } from './src/utils/NewsContext';


const Stack = createStackNavigator()

const App = () =>(
  <NavigationContainer>
    <SafeAreaView style= {{flex: 1}}>
      <FavouritesProvider>
      <NewsProvider>
        <Stack.Navigator>
        <Stack.Screen name = "News List" component = {News} />
        <Stack.Screen name = "News View" component = {NewsView} />
        <Stack.Screen name = "Favourites" component = {Favourites} />
        </Stack.Navigator>
        </NewsProvider>      
      </FavouritesProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
    </NavigationContainer>
  )
  

  export default App