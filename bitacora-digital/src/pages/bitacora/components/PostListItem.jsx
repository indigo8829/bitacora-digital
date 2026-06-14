/*------- SUBCOMPONENTE:
TITULO DE DE CADA PUBLICACIÓN PARA EL COMPONENTE -> LISTADO DE PUBLICACIONES--------*/
import { Link } from "react-router-dom";
import "./PostListItem.css"

function PostListItem ( {post}) {
    return (
        <li className="post-list-item">
            <Link to={`/bitacora/${post.id}`}>{post.titulo}</Link>
        </li>
    )
}

export default PostListItem;