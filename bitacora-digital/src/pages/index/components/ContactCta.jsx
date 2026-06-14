import CustomButton from "../../../components/CustomButton"
import "./contactaCta.css"

function ContactCta () {
    return (
        <article className="contacta-cta">
            <h2>Te invito a...</h2>
            <div>
                <p>Bitácora Digital no es un proyecto terminado.</p>
                <p>Es un espacio vivo que sigue creciendo con cada aprendizaje, cada proyecto y cada nueva pregunta o desafio que aparece en el camino.</p><p>Si alguno de estos temas conecta contigo, te invito a seguir explorando.</p>
            </div>
            <div className="index-hero-container-button">
                <CustomButton
                destino="/bitacora"
                texto="Explorar la Bitácora"
                />
                <CustomButton
                    destino="/hablemos"
                    texto="Hablemos"
                />
            </div>
        </article>
    )
}

export default ContactCta