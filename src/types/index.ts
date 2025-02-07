import { z } from "zod";
import {recipeSliceSchema, recipeDetailsSchema, recipeSchema, recipesSchema,searchRecipesSchema, recipeDetailsSchemaObject, itemAdd } from "../utils/recipes-schema";

export type Category=z.infer<typeof recipeSliceSchema>


export type recipes=z.infer<typeof searchRecipesSchema>

export type getRecipesList=z.infer<typeof recipesSchema>

export type recipe=z.infer<typeof recipeSchema>

export type recipeDetails=z.infer<typeof recipeDetailsSchema>

export type arrayIngredientsAndMesures=z.infer<typeof recipeDetailsSchemaObject>

export type itemsAdd=z.infer<typeof itemAdd>