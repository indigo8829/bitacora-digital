import CustomButton from "./CustomButton.jsx";
import "./IndexHero.css";

function IndexHero () {
    return (
        <>
            <article className="index-hero">
                <h2>Bitácora Digital</h2>
                <p>Un espacio donde convergen tecnología, innovación rural, aprendizaje y experiencias de vida.</p>
                <p>Aquí comparto proyectos, procesos, reflexiones y descubrimientos que forman parte de un camino en constante transformación.No es un portfolio tradicional. Tampoco un blog al uso.</p>
                <p>Es una bitácora abierta donde documento lo que construyo, lo que aprendo y las preguntas que sigo explorando.</p>
                <div className="index-hero-container-button">
                    <CustomButton
                    destino="/bitacora"
                    texto="Explorar la Bitácora"
                    />
                    <CustomButton
                        destino="/proyectos"
                        texto="Descubrir proyectos"
                    />
                </div>
            </article>            
        </>
    )
}

export default IndexHero
