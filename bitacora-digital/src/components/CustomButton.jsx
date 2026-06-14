import { Link } from "react-router-dom";
import "./CustomButton.css"

function CustomButton ({destino, texto, className}) {

    return (
        <>
            <Link className={`custom-button ${className}`} to={destino}>{texto}</Link>
        </>
    )
}

export default CustomButton