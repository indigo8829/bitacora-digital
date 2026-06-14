import ArticleCard from "../mihistoria/components/ArticleCard";
import ProjectCard from "../proyectos/components/ProjectCard";
import projectsData from "../../data/projectsData";
import "./Proyectos.css"
import ArticleCardImg from "../../components/ArticleCardImg";


function Proyectos () {
    return (
        <main className="proyectos">
            <h1>Proyectos</h1>
            <section>
                <ArticleCard 
                articulo= {{
                    titulo: "Bienvenida a este espacio", 
                    contenido: "Aquí recopilo algunos de los proyectos, iniciativas y procesos en los que he participado o que he impulsado a lo largo de los años. Muchos de ellos nacieron desde la curiosidad, otros desde una necesidad concreta y algunos surgieron simplemente de la voluntad de experimentar, aprender y construir algo nuevo. Esta sección se encuentra actualmente en desarrollo. Poco a poco iré ampliando la información de cada proyecto, incorporando contexto, aprendizajes, documentación y los procesos que hay detrás de cada uno de ellos.Por ahora, encontrarás una pequeña selección que permite entender mejor los ámbitos en los que me muevo y las preguntas que me interesa explorar."
                }}
                />
            </section>
            <section className="proyectos-noticias">
                <ArticleCardImg 
                articulo= {{
                    titulo: "Sección en evolución",
                    contenido: "Actualmente esta página muestra una selección resumida de proyectos.Próximamente podrás explorar cada proyecto en profundidad, consultar documentación, conocer el proceso de desarrollo y descubrir los aprendizajes obtenidos en cada iniciativa.",
                    img:""
                }}
                />

            </section>
            <section className="listado-proyectos">
                {projectsData.map((obProyecto, id) => {
                    return (
                        <ProjectCard
                            key={obProyecto.id} 
                            proyecto={obProyecto}
                        />
                    )
                })}
            </section>
        </main>
    )
}

export default Proyectos