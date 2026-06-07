/*-------PUBLICACIÓN RESUMIDA--------*/
import { Link } from "react-router-dom";

import "./PostCard.css";

function PostCard ({post}) {
          
    
    return (
        <>
            <Link to={`/bitacora/${post.id}`}>
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
                </div>       
            </Link>
        </>
    )
}

export default PostCard