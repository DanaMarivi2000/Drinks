import { useAppStore } from "../stores/useApStore"
import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"

const IndexPage = () => {


const {recipes}=useAppStore()
const hasDrinks=useMemo(()=>recipes.drinks.length,[recipes])
  return (
    <>
    <h1 className="principal__title">Recetas</h1>
    {hasDrinks?
    <div  className="recipes">
    {recipes.drinks.map(recipe=>(
     <DrinkCard key={recipe.idDrink} drink={recipe}/>
    ))}
    </div>
:(<p className="notfound">No se encontraron recetas</p>)}
    </>
  )
}

export default IndexPage
