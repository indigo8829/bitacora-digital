import PostCard from "../components/PostCard";
import postData from "../data/postData";

import CategoryList from "../components/CategoryList";
import PostList from "../components/PostList";


function Bitacora () {

    return (
        <>
            <h1>Bitacora</h1>
            <CategoryList/>
            <PostList/>
            
            {postData.map((ObjetoPost, i) => {
                return (
                    <PostCard
                        key={i} 
                        post={ObjetoPost}
                    />
                )
            })}
        </>
    )
}

export default Bitacora;

 