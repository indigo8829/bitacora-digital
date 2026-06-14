/* componente para reutilizar en diferentes paginas
   versión sin imagen 
*/

import "./ArticleCard.css"


function ArticleCard ({articulo, className}) {
    
    
    //mostrar el titulo si existen datos en titulo para mostrar sino no mostrar h2.
    return (
        <article className={`article-card ${className}`}>
            
            {articulo.titulo && (
                <h2>{articulo.titulo}</h2>
            )}
            <p>{articulo.contenido}</p> 
        </article>  
    )
}

export default ArticleCard
