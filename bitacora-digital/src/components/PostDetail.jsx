import "./PostDetail.css";

function PostDetail ({post}) {
          
    
    return (
        <>
            <div className="post-card">
                <div>
                    <h1>{post.titulo}</h1>
                    <p>CONTENIDO COMPLETO DE LA PUBLICACION</p>
                    <h3>{post.categoria}</h3>
                    <h4>{post.fecha}</h4>
                </div>
                <div>
                    <img src={post.imagen} alt="" />
                </div>
                <div>
                    <h2>{post.titulo}</h2>
                    <p>{post.detalle}</p>                   
                </div>
            </div>
        </>
    )
}

export default PostDetail