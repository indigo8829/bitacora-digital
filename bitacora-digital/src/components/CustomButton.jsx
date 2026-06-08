import { Link } from "react-router-dom";
import "./CustomButton.css"

function CustomButton ({destino, texto}) {


    return (
        <>
            <Link className="custom-button" to={destino}>{texto}</Link>
        </>
    )
}

export default CustomButton