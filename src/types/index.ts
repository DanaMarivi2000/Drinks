import { z } from "zod";
import {recipeSchema, recipesSchema,searchRecipesSchema } from "../utils/recipes-schema";

export type recipes=z.infer<typeof searchRecipesSchema>

export type getRecipesList=z.infer<typeof recipesSchema>

export type recipe=z.infer<typeof recipeSchema>