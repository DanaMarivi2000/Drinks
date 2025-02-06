import { StateCreator } from "zustand"
import { getListDrinks, getRecipes, getRecipeById } from "../services"
import { z } from "zod"
import { recipeSliceSchema} from "../utils/recipes-schema"
import { getRecipesList, recipes, recipe, recipeDetails} from "../types"

type Category=z.infer<typeof recipeSliceSchema>

export type RecipesSliceType={
  categories:Category,
  recipes:getRecipesList,
  details:recipeDetails,
  loading:boolean,
  modal:boolean,
  fetchDrinks:()=>Promise<void>,
  searchRecipes: (searchRecipes: recipes) => Promise<void>
  selectRecipe:(id:recipe['idDrink'])=>void
  closeModal:()=>void
}


export const createRecipesSlice:StateCreator<RecipesSliceType>=(set)=>({ //permite crear el state y especificar que tipo tendra ese store
    categories:[],
    recipes:{
      drinks:[{
        idDrink:'',
        strDrink:'',
        strDrinkThumb:'',
    }]
    },
    details:[],
    loading:false,
    modal:false,
    
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
},
      selectRecipe:async(id)=>{
       const recipeDetails=await getRecipeById(id)

        set(()=>({
          details:recipeDetails,
          modal:true,
        }))
      },
      closeModal:()=>{
        set(()=>({
          modal:false,
          details:[]
        }))
      }
})