/*-------LISTADO DE PUBLICACIONES--------*/

import PostListItem from "./PostListItem";
import postData from "../data/postData";
import "./PostList.css";

function PostList ( {post}) {
    return (
        <>
            <div className="post-list">
                <h2>Publicaciones</h2>
                {postData.map((ObjetoPost, i) => {
                return (
                    <PostListItem
                        key={i} 
                        post={ObjetoPost}
                    />
                )
            })}
            </div>
        </>
    )
}

export default PostList;