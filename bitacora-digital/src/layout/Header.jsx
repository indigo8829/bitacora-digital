import NavBar from "./NavBar.jsx"
import "./Header.css"
import logo from "../assets/images/marca-arena.png";

function Header () {
    return (
        //Logotipo, nombre y barra de navegación principal
        <header className="header-container">
            <div className="contenedor-img">
                <img src={logo} alt="Logo" />
            </div>
            <NavBar/>
        </header>
    )
}

export default Header