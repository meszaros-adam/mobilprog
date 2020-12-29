import React, { useState } from 'react'
import {View, Text} from 'react-native'

const News = ({text}) => {

    const [news, setNews] = useState([])

    const load = async () => {
        const response = await fetch(
            'http://newsapi.org/v2/top-headlines?country=us&apiKey=d167ec19db15431bb6dc5b24673a59cd'
        )
        const data = await response.json()
        setNews(data)
    }

    load()

    return(
    <View>
        <Text> {text} </Text>
        <Text> {JSON.stringify(news)} </Text>
    </View>
    )
}

export default News