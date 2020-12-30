import {useContext} from 'react'
import {FavouritesContext} from '../utils/FavouritesContext'

export const useFavourites = () => {
    const context = useContext( FavouritesContext )
    return context
}