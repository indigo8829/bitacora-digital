/*-------PUBLICACIÓN RESUMIDA--------*/
import { Link } from "react-router-dom";
import "./PostCard.css";

function PostCard ({post}) {       
    
    return (
        <article className="post-card">
            <Link to={`/bitacora/${post.id}`}>
                <div>
                    <img src={post.imagen} alt={post.titulo} />
                </div>
                <div>
                    <h2>{post.titulo}</h2>
                    <h3>{post.categoria}</h3>
                    <h4>{post.fecha}</h4>
                    <p>{post.resumen}</p>
                </div>
            </Link>
        </article>
    )
}

export default PostCard