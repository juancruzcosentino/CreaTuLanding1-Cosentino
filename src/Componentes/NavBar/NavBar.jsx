import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      
      <Link to="/">
        <h1>AltaNieve</h1>
      </Link>
        <nav>
            <ul>
                <li>
                  <Link to="/categoria/indumentaria"> Indumentaria </Link>
                </li>
                <li>
                  <Link to="/categoria/equipamiento"> Equipamiento </Link>
                </li>
            </ul>
        </nav>
    
    <CartWidget/>
    </header>
  )
}

export default NavBar
