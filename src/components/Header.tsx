import { ChangeEvent, useEffect, useMemo, useState } from "react"
import {NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useApStore"
import { recipes } from "../types"

const Header = () => {

  const{pathname}=useLocation()
  const location=useMemo(()=>pathname==="/",[pathname])
  console.log(location)

  const {fetchDrinks, categories, searchRecipes}=useAppStore()
  const [values, setValue]=useState<recipes>({
    ingredient:'',
    category:'',
  });

  const [alert, setAlert]=useState('')
  const {showNotification}=useAppStore()
  useEffect(()=>{
    fetchDrinks()
  },[])


  const handleChange=(event:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLSelectElement>)=>{
    const {name, value}=event.target

    setValue({...values,[name]:value});
  }

  const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();

      if(Object.values(values).includes("")){
        showNotification({
          text:"Todos los campos son obligatorios",
          error:true,
        })
        return
      }

      //Consultar las recetas
      
      searchRecipes(values);
      setValue({
        ingredient:"",
        category:""
      })
  }
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
          <form className="formulario" onSubmit={onSubmit}>
            <div className="formulario__container">
              <label htmlFor="ingredient" className="formulario__label">
                Nombre o Ingredientes
              </label>
              <input type="text" placeholder="Ej. Vodka" className="formulario__input" id="ingredient" name="ingredient" onChange={handleChange} value={values.ingredient}/>
              <label htmlFor="category" className="formulario__label">Categoría</label>
              <select className="formulario__select" id="category" name="category" onChange={handleChange} value={values.category}>
                <option value="">-- Seleccione --</option>
                {categories.map(category=>(
                  <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                ))}
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
