import { StateCreator } from "zustand"
import { getListDrinks } from "../services"
import { set,z } from "zod"
import { recipeSliceSchema } from "../utils/recipes-schema"

type Category=z.infer<typeof recipeSliceSchema>

export type RecipesSliceType={
  categories:Category,
  fetchDrinks:()=>Promise<void>
}


export const createRecipesSlice:StateCreator<RecipesSliceType>=(set)=>({ //permite crear el state y especificar que tipo tendra ese store
    categories:[],

    fetchDrinks:async()=>{
       const drinksList=await getListDrinks()
       set(()=>({
        categories:drinksList
       }))
}})