import { recipe } from "../types"
type drink={
    drink:recipe
}
const DrinkCard = ({drink}:drink) => {
  return (
    <div key={drink.idDrink} className="recipes__container">
        <div className="recipes__container__image">
    <img src={drink.strDrinkThumb} alt={drink.strDrink} className="recipes__image"/>
        </div>
        <div>
    <h2 className="recipes__title">{drink.strDrink}</h2>
            <button className="recipes__button">
                Ver Receta
            </button>
        </div>
  </div>
  )
}

export default DrinkCard
