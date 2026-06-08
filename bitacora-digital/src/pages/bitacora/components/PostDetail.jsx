/*-------PUBLICACIÓN DETALLADA O COMPLETA--------*/
import { useParams } from "react-router-dom"
import postData from "../../../data/postData";
import "./PostDetail.css";

//obtengo los parametros dinamicos (id) de la URL con useParams
//filtro el post correpondiente con find y lo guardo 
//muestro los datos del post guardado


function PostDetail () {
    const {idPost} = useParams();
    const idPostNum = parseInt(idPost);
    //console.log(postData);
    const postSelecc = postData.find((post) => post.id === idPostNum);
    //console.log(postSelecc);         
    return (
        <>
            <article className="post-detail">
                <div>
                    <h1>{postSelecc.titulo}</h1>
                    <p>CONTENIDO COMPLETO DE LA PUBLICACION</p>
                    <h3>{postSelecc.categoria}</h3>
                    <h4>{postSelecc.fecha}</h4>
                </div>
                <div>
                    <img src={postSelecc.imagen} alt="" />
                </div>
                <div>
                    <h2>{postSelecc.titulo}</h2>
                    <p>{postSelecc.detalle}</p>                   
                </div>
            </article>
        </>
    )
}

export default PostDetail