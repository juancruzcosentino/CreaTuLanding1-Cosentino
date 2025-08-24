import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <h1>AltaNieve</h1>
        <nav>
            <ul>
                <li>Indumentaria</li>
                <li>Equipamiento</li>
                <li>Accesorios</li>
            </ul>
        </nav>
    
    <CartWidget/>
    </header>
  )
}

export default NavBar
