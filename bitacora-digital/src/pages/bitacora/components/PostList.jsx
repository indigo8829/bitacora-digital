/*-------LISTADO DE PUBLICACIONES--------*/

import PostListItem from "./PostListItem";
import postData from "../../../data/postData";
import "./PostList.css";

function PostList ( {post}) {
    return (
        <>
            <aside className="post-list">
                <h2>Publicaciones</h2>

                <ul>
                    {postData.map((ObjetoPost, i) => {
                        return (
                            <PostListItem
                                key={i} 
                                post={ObjetoPost}
                            />
                        )
                    })}
                </ul>
            </aside>
        </>
    )
}

export default PostList;