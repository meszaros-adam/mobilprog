import {useContext} from 'react'
import {NewsContext} from '../utils/NewsContext'

export const useNews = () => {
    const context = useContext( NewsContext )
    return context
}