import React, { useEffect, useState } from 'react'
import {View, Text, Image, ActivityIndicator, Button, TouchableHighlight} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useFavourites } from './hooks/useFavourite'

const Favourite = () => {

    const {favourites, add, remove} = useFavourites()

    const renderItem = ({item}) => (
        <TouchableHighlight 
        underlayColor="#A2A2D0"
        onPress={()=> console.log('hello')}
        style={{ padding: 20,
            textAlign: 'center' ,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            justifyContent: 'center',     
        }} 
        >
        <Text> {item.title} </Text>
        </TouchableHighlight> 
    )
    


    return(
    <View >
    <FlatList 
        style= {{width: '100%'}}
        data={favourites} 
        renderItem={renderItem}
        keyExtractor={item => item.title} />
    </View>
    )
}

export default Favourite