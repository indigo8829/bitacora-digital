// subcomponente tarjetas de las categorias en la página de inicio

import './TopicCard.css'

function TopicCard ({categoria}) {
    return (
        <>
            <div className="topic-card">
                <div>
                    <img src={categoria.imagen} alt={categoria.nombre} />
                </div>
                <div>
                    <h2>{categoria.nombre}</h2>
                    <p>{categoria.descripcion}</p>
                </div>
            </div>
        </>
    )
}

export default TopicCard