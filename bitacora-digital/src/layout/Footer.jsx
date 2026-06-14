/*-------BARRA DE NAVEGACIÓN SECUNDARIA--------*/
import { Link } from "react-router-dom";
import "./Footer.css";
import CustomButton from "../components/CustomButton";

function Footer () {
    return (
        <footer className="footer-container">
            <div className="navegacion-secundaria">
                <div className="texto">
                    <h3>Bitácora Digital</h3>
                    <p>Espacio vivo donde convergen proyectos, tecnología,innovación rural, aprendizaje y experiencias que forman parte de un proceso continuo de construcción y transformación.</p>
                </div>
                <div className="navegacion-paginas">
                    <h3>Explorar</h3>
                    <Link to='/'>Home</Link>
                    <Link to='/mihistoria'>Mi Historia</Link>
                    <Link to='/bitacora'>Bitácora</Link>
                    <Link to='/hablemos'>Hablemos</Link>
                </div>
                <div className="navegacion-externa">
                    <h3>Conectar</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/estefan%C3%ADa-molina-gim%C3%A9nez-670913277/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/indigo8829/miruta_developer_web_.git" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>                
                </div>
                <div className="texto">
                    <h3>¿Te apetece conversar?</h3>
                    <p>Si algo de lo que has leído te ha resultado útil, interesante o te ha hecho reflexionar, estaré encantada de conversar.</p><p>Gracias por pasar por aquí.</p>
                    <CustomButton
                        destino="/hablemos"
                        texto="Hablemos"
                    />
                </div>
            </div>
            <div className="copyright">
                <p>© 2026 Estefanía Molina Giménez | Bitácora Digital</p>
            </div>
        </footer>
    ) 
}

export default Footer 