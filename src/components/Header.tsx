import { useMemo } from "react"
import {NavLink, useLocation } from "react-router-dom"
const Header = () => {

  const{pathname}=useLocation()
  const location=useMemo(()=>pathname==="/",[pathname])
  console.log(location)
  return (
    <header className={location?'header-principal':'header-alternative'}>
      <div className='header-principal-firstcontainer'>
        <div className='header-principal-secondcontainer'>
            <div className="logo">
                <img src="/logo.svg" alt="logotipo" />
            </div>
            <nav className="navegacion">
                <NavLink to="/" className={({isActive})=>isActive?'active-link':'link'}>Home</NavLink>
                <NavLink to="/favorites" className={({isActive})=>isActive?'active-link':"link"}>Favorites</NavLink>
               
            </nav>
        </div>
        {location&&(
          <form className="formulario">
            <div className="formulario__container">
              <label htmlFor="ingredient" className="formulario__label">
                Nombre o Ingredientes
              </label>
              <input type="text" placeholder="Ej. Vodka" className="formulario__input" id="ingredient"/>
              <label htmlFor="category" className="formulario__label">Categoría</label>
              <select className="formulario__select" id="category">
                <option value="">-- Seleccione --</option>
              </select>
            </div>
            <input type="submit" value='Buscar Recetas' className="formulario__button" />
          </form>
        )}
      </div>
    </header>
  )
}

export default Header
