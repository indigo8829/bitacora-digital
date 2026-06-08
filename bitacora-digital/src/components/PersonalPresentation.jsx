import CustomButton from "./CustomButton.jsx";
import "./PersonalPresentation.css";

function PersonalPresentation () {
    return (
        <>
            <article className="personal-presentation">
                <div>
                    <img src="https://picsum.photos/150" alt="" />
                </div>
                <div>
                    <h3>Sobre mí</h3>
                    <p>Soy Estefanía.</p>
                    <p>A lo largo de mi vida he transitado por caminos muy diferentes: emprendimiento, diseño, turismo rural, gestión de proyectos, innovación social y, más recientemente, desarrollo web.</p>
                    <p>Mi recorrido nunca ha sido lineal, pero precisamente en esa diversidad he encontrado una forma propia de entender el aprendizaje, el trabajo y la construcción de nuevos proyectos.</p>
                    <p>Bitácora Digital nace como un lugar donde reunir todo ese recorrido y seguir documentando lo que todavía está por venir.</p>
                </div>
                <CustomButton 
                    destino="/mihistoria"
                    texto="Conoce mi historia"
                />
            </article>
        </>
    )
}

export default PersonalPresentation