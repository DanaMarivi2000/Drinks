import { useAppStore } from "../stores/useApStore"
import { recipe } from "../types"
type drink={
    drink:recipe
}
const DrinkCard = ({drink}:drink) => {
    const{selectRecipe}=useAppStore()
  return (
    <div key={drink.idDrink} className="recipes__container">
        <div className="recipes__container__image">
    <img src={drink.strDrinkThumb} alt={drink.strDrink} className="recipes__image" loading="lazy"/>
        </div>
        <div>
    <h2 className="recipes__title">{drink.strDrink}</h2>
            <button className="recipes__button" onClick={()=>selectRecipe(drink.idDrink)}>
                Ver Receta
            </button>
        </div>
  </div>
  )
}

export default DrinkCard
