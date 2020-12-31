
import {View, Text, Image, ActivityIndicator, Button, TouchableHighlight} from 'react-native'
import { useFavourites } from './hooks/useFavourite'
import { useNews } from './hooks/useNews'
import React, { useEffect, useState } from 'react'
import newsView from './newsView'


const News = ({navigation}) => {


    const {favourites, add, remove} = useFavourites()
    const {news, index, setIndex, load, actualItem} = useNews()


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
        add(news[index])
    }

    const unfavourite = () => {
       remove(news[index])
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
        <Text style={{marginBottom:20, marginTop: 30}}>{news[index].title} </Text>

        <TouchableHighlight
        onPress={()=> navigation.navigate ('News View')}
        underlayColor="#D3D3D3"
        >
        <Image 
        source= {{ uri: news[index].urlToImage }} 
        style={{width:400, height:400, marginBottom: 20, marginTop: 20 }}
        resizedMode="contain"
        />
        </TouchableHighlight>

        <View style= {{flexDirection: 'row'}}> 
        <Button title= "Prev" onPress={prev}/>
        <Button title= "Next" onPress={next}/>
        </View> 
        <View style= {{flexDirection: 'row'}}> 
        {favourites.includes(news[index]) ? (
            <Button title= "Unfavourite" onPress={unfavourite}/>
        ) : (
        <Button title= "Favourite" onPress={favourite}/>
        )}    
        </View> 
    </View>    
    )
}

export default News