import React, { createContext, useState } from "react";

export const NewsContext = createContext ()

export const NewsProvider = (props) => {
     
    const [news, setNews] = useState([])
    const [index, setIndex] = useState(0)
     
    const load = async () => {
        const response = await fetch(
            'http://newsapi.org/v2/top-headlines?country=hu&apiKey=d167ec19db15431bb6dc5b24673a59cd'
        )
        const data = await response.json()
        setNews(data.articles)
    }

    


    return (
    <NewsContext.Provider
    value= {{news, index, setIndex, load }}
    {...props}
    />
    )
}