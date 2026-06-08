/*-------BARRA DE NAVEGACIÓN PRINCIPAL--------*/

import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar () {
    return (
        <>
            <nav className="navegacion-principal">
                <navLink to='/'>Inicio</navLink>
                <navLink to='/mihistoria'>Mi Historia</navLink>
                <navLink to='/proyectos'>Proyectos</navLink>
                <navLink to='/bitacora'>Bitácora</navLink>
                <navLink to='/hablemos'>Hablemos</navLink>
            </nav>
        </>
    ) 
}

export default NavBar; 