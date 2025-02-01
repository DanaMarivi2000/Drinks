import { Link, NavLink } from "react-router-dom"
const Header = () => {
  return (
    <header className='header-principal'>
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
      </div>
    </header>
  )
}

export default Header
