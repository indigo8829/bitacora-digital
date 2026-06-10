import "./ArticleCard.css"


function ArticleCard ({articulo}) {
    //mostrar el titulo si existen datos en titulo para mostrar sino no mostrar h2.
    return (
        <>
            <article className="article-card">
                {articulo.titulo && (
                    <h2>{articulo.titulo}</h2>
                )}
                <p>{articulo.contenido}</p>
                
            </article>  
        </>
    )
}

export default ArticleCard
