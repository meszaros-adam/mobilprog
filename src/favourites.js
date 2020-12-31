import React, { useEffect, useState } from 'react'
import {View, Text, Image, ActivityIndicator, Button, TouchableHighlight, InteractionManager} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useFavourites } from './hooks/useFavourite'
import { useNews } from './hooks/useNews'

const Favourite = ({navigation}) => {

    const {favourites, add, remove} = useFavourites()
    const {news, index, setIndex, load} = useNews()

    

    const renderItem = ({item}) => {

        const select = (item) => {
            const index = news.findIndex((news) => news.url === item.url)
            setIndex(index)
        }
                
        return(<TouchableHighlight 
        underlayColor="#D3D3D3"
        onPress={ ()=>  {select(item); navigation.navigate ('News View')}}
        style={{ padding: 20,
            textAlign: 'center',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            justifyContent: 'center',     
        }} 
        >
        <Text> {item.title} </Text>
        </TouchableHighlight>)
    }
    

    return(
    <View >
    <FlatList 
        style= {{width: '100%'}}
        data={favourites} 
        renderItem={renderItem}
    />
    </View>
    )
}

export default Favourite