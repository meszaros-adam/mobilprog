
import {View, Text, Image, ActivityIndicator, Button, TouchableHighlight} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useFavourites } from './hooks/useFavourite'
import React, { useEffect, useState } from 'react'
const News = ({title, navigation}) => {

    const [news, setNews] = useState([])
    const [index, setIndex] = useState(0)
    const {favourites, add, remove} = useFavourites()

    const load = async () => {
        const response = await fetch(
            'http://newsapi.org/v2/top-headlines?country=hu&apiKey=d167ec19db15431bb6dc5b24673a59cd'
        )
        const data = await response.json()
        setNews(data.articles)
    }

    useEffect(() =>{
        load()
    }, [])

    const next = () =>{
        setIndex((index+1)%news.length)
    }

    const prev = () =>{
        setIndex((index+news.length-1)%news.length)
    }

    const favourite = () =>{
        const item = news[index]
        add(item)
    }

    const unfavourite = () => {
        const item = news[index]
       remove(item)
    }

    
    if(news.length <=0){
        return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator color="black"/>
        </View>

        )   
    }


    return(
    <View style={{flex:1, alignItems: 'center'}}>
        <Text style={{fontSize: 20, marginBottom: 10}}> {title} </Text>
        <Text> {news[index].title} </Text>
        <Image 
        source= {{ uri: news[index].urlToImage }} 
        style={{width:400, height:400, marginBottom: 20, marginTop: 20 }}
        resizedMode="contain"
        />
        <View style= {{flexDirection: 'row'}}> 
        <Button title= "Prev" onPress={prev}/>
        {favourites.includes(news[index]) ? (
            <Button title= "Unfavourite" onPress={unfavourite}/>
        ) : (
        <Button title= "Favourite" onPress={favourite}/>
        )}        
        <Button title= "Next" onPress={next}/>
        </View> 
        <Button title= "Favourites" onPress={ ()=> navigation.navigate ('Favourites')} />
    </View>    
    )
}

export default News