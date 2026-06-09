import "./ProjectCard.css"

function ProjectCard ({proyecto}) {
    return (
        <>
            <div className="project-card">
                <h2>{proyecto.titulo}</h2>
                <div>
                    <img src={proyecto.imagen} alt={proyecto.titulo} />
                </div>
                <div>
                    <p>{proyecto.descripcion}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard