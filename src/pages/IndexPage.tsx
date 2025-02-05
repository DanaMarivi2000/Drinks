import { useAppStore } from "../stores/useApStore"
import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import Spinner from "../components/Spinner"

const IndexPage = () => {


const {recipes,loading}=useAppStore()
const hasDrinks=useMemo(()=>recipes.drinks.length,[recipes])
  return (
    <>
    <h1 className="principal__title">Recetas</h1>
    {loading?<Spinner/>:hasDrinks?
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
