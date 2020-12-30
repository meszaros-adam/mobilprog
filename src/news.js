import React, { useEffect, useState } from 'react'
import {View, Text, Image, ActivityIndicator, Button, TouchableHighlight} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const News = ({title}) => {

    const [news, setNews] = useState([])
    const [index, setIndex] = useState(0)
    const [favourites, setFavourites] = useState([])

    const load = async () => {
        const response = await fetch(
            'http://newsapi.org/v2/top-headlines?country=us&apiKey=d167ec19db15431bb6dc5b24673a59cd'
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
        if(!favourites.includes(news[index])){
        setFavourites([...favourites, news[index]])
    }
    }

    const unfavourite = () => {
       const filtered = favourites.filter( ( favourite )=>favourite !== news[index] )
       setFavourites(filtered)
    }

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

        <FlatList 
        style= {{width: '100%'}}
        data={favourites} 
        renderItem={renderItem}
        keyExtractor={item => item.title} />

    </View>
    
    )
}

export default News