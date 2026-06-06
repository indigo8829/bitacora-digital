/*------- SUBCOMPONENTE:
TITULO DE DE CADA PUBLICACIÓN PARA EL COMPONENTE -> LISTADO DE PUBLICACIONES--------*/

function PostListItem ( {post}) {
    return (
        <>
            <div>
                <h3>{post.titulo}</h3>
            </div>
        </>
    )
}

export default PostListItem;