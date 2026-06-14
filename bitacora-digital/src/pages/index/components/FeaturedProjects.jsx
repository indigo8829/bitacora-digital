import ProjectCard from "../../proyectos/components/ProjectCard"
import projectsData from "../../../data/projectsData"
import CustomButton from "../../../components/CustomButton"
import "./FeaturedProjects.css"
import "../../../components/CustomButton.css"


function FeacturedSection () {

    const proyectosDestacados = projectsData.filter((proyecto) => proyecto.destacado === true);

    return (
        <div className="featured-projects">
            <h2>Proyectos Destacados</h2>

            <div className="contenedor-project-cards">
                {proyectosDestacados.map((destacados,i) => {
                    return (
                        <ProjectCard
                            key={destacados.id}
                            proyecto={destacados}
                        />
                    )
                })}
            </div>
            <div className="index-hero-container-button">
                <CustomButton className="personalizado-boton-claro"
                destino="/proyectos"
                texto="Descubrir proyectos"
                />
            </div>
        </div>
    )
}

export default FeacturedSection