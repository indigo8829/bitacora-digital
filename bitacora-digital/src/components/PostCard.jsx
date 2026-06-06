import "./PostCard.css";

function PostCard ({post, clickLeerMasCallBack}) {
          
    
    return (
        <>
            <div className="post-card">
                <div>
                    <img src={post.imagen} alt="" />
                </div>
                <div>
                    <h2>{post.titulo}</h2>
                    <h3>{post.categoria}</h3>
                    <h4>{post.fecha}</h4>
                    <p>{post.resumen}</p>
                </div>
                <button>Leer más...</button>
            </div>
        </>
    )
}

export default PostCard