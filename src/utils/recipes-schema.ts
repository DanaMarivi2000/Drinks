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

export const recipeDetailsSchemaObject=z.object({
    idDrink:z.string(),
    strDrink:z.string(),
    strDrinkThumb:z.string(),
    strIngredient1:z.string().nullable(),//Puede o no existir
    strIngredient2:z.string().nullable(),
    strIngredient3:z.string().nullable(),
    strIngredient4:z.string().nullable(),
    strIngredient5:z.string().nullable(),
    strIngredient6:z.string().nullable(),
    strInstructions:z.string(),
    strMeasure1:z.string().nullable(),
    strMeasure2:z.string().nullable(),
    strMeasure3:z.string().nullable(),
    strMeasure4:z.string().nullable(),
    strMeasure5:z.string().nullable(),
    strMeasure6:z.string().nullable(),
})

export const itemAdd=recipeDetailsSchemaObject.extend({
    quantity:z.number()
})

export const recipeDetailsSchema=z.array(recipeDetailsSchemaObject)


export const NotificationSchema=z.object({
    text:z.string(),
    error:z.boolean(),
    show:z.boolean(),
})
