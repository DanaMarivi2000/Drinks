import {z} from 'zod'

export const recipeSliceSchema=z.array(z.object({
        strCategory:z.string()
    }))


