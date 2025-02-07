import { StateCreator } from "zustand";
import {arrayIngredientsAndMesures, itemsAdd} from '../types'
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";

export type FavoritesSliceType={
    favorites:arrayIngredientsAndMesures[]
    handleClickFavorite:(recipe:arrayIngredientsAndMesures)=>void
    deleteFavoriteList:(id:arrayIngredientsAndMesures['idDrink'])=>boolean
    loadFromStorage:()=>void
}

export const createFavoritesSlice:StateCreator<FavoritesSliceType & RecipesSliceType, [], [], FavoritesSliceType>=(set,get,api)=>({
    
    
    favorites:[],

    handleClickFavorite:(recipe)=>{
        console.log(recipe)
        if(get().favorites.find(favorite=>favorite.idDrink===recipe.idDrink)){
            set((state)=>({
                favorites:state.favorites.filter(favorite=>favorite.idDrink!=recipe.idDrink)
            }))
        }else{
            const itemadd={...recipe,quantity:1}
            set((state)=>({
                favorites:[...state.favorites, itemadd]
            }))
        }
        createRecipesSlice(set,get, api).closeModal() //Puedes consumir los datos de otro slide
        console.log(get().favorites)
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    deleteFavoriteList:(id)=>{
     return get().favorites.some(favorite=>favorite.idDrink===id)
     
    },
    loadFromStorage:()=>{
        
        const storedFavorites=localStorage.getItem('favorites')
        if(storedFavorites){
            set(()=>({
                favorites:JSON.parse(storedFavorites), 
            }))
        }
    }
})