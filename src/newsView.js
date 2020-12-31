import React, { useEffect, useState } from 'react'
import {View, Text, Image, ActivityIndicator, Button, TouchableHighlight} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useFavourites } from './hooks/useFavourite'
import { useNews } from './hooks/useNews'
import { Linking} from 'react-native'



const newsView = () =>{

    const {news,  index, setIndex, load} = useNews()

    return(
    <View style={{flex:1, alignItems: 'center'}}> 
    <Text style={{fontSize: 20, marginBottom: 10, marginTop: 10}}>Author: {news[index].author} </Text>
    <Text style={{marginBottom: 10, marginTop: 10}}>{news[index].title} </Text>
    <TouchableHighlight 
    onPress={()=> Linking.openURL(news[index].url)}
    underlayColor="#D3D3D3"
    >
        <Image 
        source= {{ uri: news[index].urlToImage }} 
        style={{width:400, height:400, marginBottom: 20, marginTop: 20 }}
        resizedMode="contain"
        />
        </TouchableHighlight >
        <TouchableHighlight 
        onPress={()=> Linking.openURL(news[index].url)}
        underlayColor="#D3D3D3"
        >
        <Text style={{ marginTop: 20, marginBottom: 20}}>Content: {news[index].content} </Text>
        </TouchableHighlight>
    
    </View>
    )
}

export default newsView