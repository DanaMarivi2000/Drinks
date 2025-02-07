import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useApStore"

    
const FavoritesPage = () => {
  
  const {favorites}=useAppStore()

  return (
    <>
    <h1 className="favorites__title">Favorites</h1>
    {favorites.length?(
    <div className="favorite__container">
      {favorites.map(drink=>(
        <div>
          <DrinkCard key={drink.idDrink} drink={drink}/>
        </div>
      ))}
      
    </div>
    ):(<p className="notfound" >No hay favoritos aún.</p>)
  }
    </>
  )
}

export default FavoritesPage
