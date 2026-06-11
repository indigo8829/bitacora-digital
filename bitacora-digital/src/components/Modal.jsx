import { createPortal } from "react-dom";
import "./Modal.css"


//los modales se renderizan dentro del body 
function Modal ({isOpen, onClose , children}) {

    if (!isOpen) return null;

    return createPortal (
        <div className="modal-contenedor">
            <div className="modal-contenido">
                {children}
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>,
        document.body 
    );
}

export default Modal