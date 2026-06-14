/* componente para reutilizar en diferentes paginas
   versión con imagen 
*/

import "./ArticleCardImg.css"


function ArticleCardImg ({articulo, className}) {

    //mostrar el titulo si existen datos en titulo para mostrar sino no mostrar h2.
    return (
    
        <article className={`article-card-img ${className}`}>
            <div>
                <img src={articulo.img} alt={articulo.titulo} />
            </div>
            <div>
                {articulo.titulo && (
                    <h2>{articulo.titulo}</h2>
                )}
                <p>{articulo.contenido}</p>
            </div>  
        </article>  
    )
}

export default ArticleCardImg
