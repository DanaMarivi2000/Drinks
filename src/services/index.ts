import axios from "axios"
import { recipeSliceSchema } from "../utils/recipes-schema";
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