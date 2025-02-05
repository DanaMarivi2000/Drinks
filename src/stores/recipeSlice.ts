import { StateCreator } from "zustand"
import { getListDrinks, getRecipes } from "../services"
import { z } from "zod"
import { recipeSliceSchema} from "../utils/recipes-schema"
import { getRecipesList, recipes } from "../types"

type Category=z.infer<typeof recipeSliceSchema>

export type RecipesSliceType={
  categories:Category,
  recipes:getRecipesList,
  loading:boolean,
  fetchDrinks:()=>Promise<void>,
  searchRecipes: (searchRecipes: recipes) => Promise<void>
}


export const createRecipesSlice:StateCreator<RecipesSliceType>=(set)=>({ //permite crear el state y especificar que tipo tendra ese store
    categories:[],
    recipes:{
      drinks:[]
    },
    loading:false,

    fetchDrinks:async()=>{
       const drinksList=await getListDrinks()
       set(()=>({
         categories:drinksList
        }))
      },
      
      searchRecipes:async(searchRecipes)=>{
        set(()=>({
          loading:true,
        }))
        const recipesList=await getRecipes(searchRecipes)
        console.log(recipesList)
        set(()=>({
          recipes:recipesList,
          loading:false
        }))
}
})