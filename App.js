import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import News from './src/news'
import Favourites from './src/favourites'
import NewsView from './src/newsView'
import { FavouritesProvider } from './src/utils/FavouritesContext';
import { NewsProvider } from './src/utils/NewsContext';


const Tab = createBottomTabNavigator()


const App = () => ( 
  <NavigationContainer>
    <SafeAreaView style= {{flex: 1}}>
      <FavouritesProvider>
      <NewsProvider>
        <Tab.Navigator>
        <Tab.Screen name = "News List" component = {News} />
        <Tab.Screen name = "Favourites" component = {Favourites} />
        <Tab.Screen name = "News View" component = {NewsView} />
        </Tab.Navigator>
        </NewsProvider>      
      </FavouritesProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
    </NavigationContainer>
  )
  

  export default App