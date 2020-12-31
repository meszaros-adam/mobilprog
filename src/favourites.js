import React, { useEffect, useState } from 'react'
import {View, Text, Image, ActivityIndicator, Button, TouchableHighlight} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useFavourites } from './hooks/useFavourite'

const Favourite = () => {

    const {favourites, add, remove} = useFavourites()

    const renderItem = ({item}) => (
        <TouchableHighlight 
        underlayColor="#D3D3D3"
        onPress={()=>  navigation.navigate (<News View />)}
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