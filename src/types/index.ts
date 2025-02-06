import { z } from "zod";
import {recipeDetailsSchema, recipeSchema, recipesSchema,searchRecipesSchema, recipeDetailsSchemaObject } from "../utils/recipes-schema";

export type recipes=z.infer<typeof searchRecipesSchema>

export type getRecipesList=z.infer<typeof recipesSchema>

export type recipe=z.infer<typeof recipeSchema>

export type recipeDetails=z.infer<typeof recipeDetailsSchema>

export type arrayIngredientsAndMesures=z.infer<typeof recipeDetailsSchemaObject>