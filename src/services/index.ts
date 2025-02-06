import axios from "axios"
import { recipeSliceSchema, recipesSchema, recipeDetailsSchema } from "../utils/recipes-schema";
import { recipes, recipe } from "../types";
export const getListDrinks=async()=>{
    const url='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'


        const {data:{drinks}}=await axios(url);
        console.log(drinks)
        const result=recipeSliceSchema.safeParse(drinks)
        console.log(result)
        if(result.success){
            const data=result.data
            console.log(data)
            return data
        }
    
}

export const getRecipes=async(searchRecipes:recipes)=>{
    const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchRecipes.category}&i=${searchRecipes.ingredient}`

    const {data}=await axios(url)
    // console.log(drinks)
    const result=recipesSchema.safeParse(data)
    if(result.success){
        const recipes=result.data
        console.log(recipes)
        return recipes
    }

}

export const getRecipeById=async(id:recipe['idDrink'])=>{
    console.log(id)
    const {data:{drinks}}=await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    console.log(drinks)
    const recipeDetails=recipeDetailsSchema.safeParse(drinks)
    console.log(recipeDetails)
    if(recipeDetails.success){
        const recipeDetailsList=recipeDetails.data
        console.log(recipeDetailsList)
        return recipeDetailsList
    }
}