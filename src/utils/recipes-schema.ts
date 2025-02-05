import {z} from 'zod'

export const recipeSliceSchema=z.array(z.object({
        strCategory:z.string()
    }))

export const searchRecipesSchema=z.object({
    ingredient:z.string(),
    category:z.string()
})

export const recipeSchema=z.object({
    idDrink:z.string(),
    strDrink:z.string(),
    strDrinkThumb:z.string(),
})

export const recipesSchema=z.object({
    drinks:z.array(recipeSchema)
})
