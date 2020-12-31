import React, { createContext, useEffect, useState } from "react";


export const FavouritesContext = createContext ()

export const FavouritesProvider = (props) => {

    const [favourites, setFavourites] = useState([])

    

    const add = (item) => {
        if(!favourites.includes(item)) {
        setFavourites([...favourites, item])
        }

    }

    const remove  = (item) => {
        const filtered = favourites.filter( ( favourite )=>favourite !== item )
        setFavourites(filtered)
    }


    return (
    <FavouritesContext.Provider
    value= {{favourites, add, remove}}
    {...props}
    />
    )
}