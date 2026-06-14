import ArticleCard from "../mihistoria/components/ArticleCard";
import ContactForm from "./components/ContactForm";
import "./Hablemos.css"
import "../mihistoria/components/ArticleCard.css";

function Hablemos () {

    return (
        <main className="hablemos">
            <section>
                <ArticleCard className="article-card-claro"
                articulo={{
                    titulo:"",
                    contenido: "Detrás de cada proyecto, de cada aprendizaje y de cada publicación, siempre hay personas.Esta bitácora nace del deseo de compartir experiencias, documentar procesos y abrir conversaciones que puedan generar nuevas conexiones, colaboraciones o simplemente intercambios valiosos entre personas con intereses afines.Si alguna reflexión te ha resonado, si compartimos inquietudes similares o si crees que podemos aportar valor mutuamente, estaré encantada de escucharte."
                }}/>
            </section>
            <section>
                <article>
                    <h2>Algunas conversaciones que me interesan</h2>
                    <ul>
                        <li>Tecnología y digitalización.</li>
                        <li>Desarrollo web y aprendizaje tecnológico.</li>
                        <li>Innovación social y territorio.</li>
                        <li>Emprendimiento rural.</li>
                        <li>Procesos de reinvención profesional.</li>
                        <li>Aprendizaje continuo.</li>
                        <li>Salud, adaptación y resiliencia.</li>
                        <li>Proyectos colaborativos con impacto social.</li>
                    </ul>
                </article>
            </section>
            <section>
                <ArticleCard
                articulo={{
                    titulo: "Construir en compañia",
                    contenido:"Creo profundamente en el valor de las redes de colaboración.Muchas de las iniciativas más interesantes en las que he participado surgieron gracias a conversaciones informales, encuentros inesperados o personas que decidieron compartir una idea antes de que estuviera completamente definida.Por eso este espacio también está abierto a explorar posibles colaboraciones, proyectos compartidos, propuestas profesionales, iniciativas sociales o cualquier conversación que pueda generar aprendizaje mutuo y nuevas oportunidades de construcción colectiva."
                }}/>
            </section>
            <ContactForm/>
            <section>
                <div>
                    <h2>Otras formas de conectar</h2>
                    <p>También puedes encontrarme en los siguientes espacios:</p>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/estefan%C3%ADa-molina-gim%C3%A9nez-670913277/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/indigo8829/miruta_developer_web_.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <ArticleCard 
                articulo={{
                    titulo: "Gracias por llegar hasta aquí.",
                    contenido: "Bitácora Digital no pretende ofrecer respuestas definitivas. Es simplemente un espacio donde compartir preguntas, experiencias, proyectos y aprendizajes que siguen evolucionando con el tiempo.Si algo de lo que has encontrado aquí te ha resultado útil, te ha hecho reflexionar o ha despertado una nueva idea, entonces esta conversación ya ha merecido la pena."
                }}/>
            </section>
        </main>
    
    )
}

export default Hablemos