/*-------BARRA DE NAVEGACIÓN PRINCIPAL--------*/

import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar () {
    return (
        <>
            <nav className="navegacion-principal">
                <Link to='/'>Inicio</Link>
                <Link to='/mihistoria'>Mi Historia</Link>
                <Link to='/proyectos'>Proyectos</Link>
                <Link to='/bitacora'>Bitácora</Link>
                <Link to='/hablemos'>Hablemos</Link>
            </nav>
        </>
    ) 
}

export default NavBar; 