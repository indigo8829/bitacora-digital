import "./ArticleCard.css"


function ArticleCard ({articulo}) {
    return (
        <>
            <article className="article-card">
                <h2>{articulo.titulo}</h2>
                <p>{articulo.contenido}</p>
                
            </article>  
        </>
    )
}

export default ArticleCard
