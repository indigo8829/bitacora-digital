import PostCard from "../components/PostCard";
import postData from "../data/postData";
import CategoryList from "../components/CategoryList";
import PostList from "../components/PostList";
import PostDetail from "../components/PostDetail";

import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";

function Bitacora () {
    //Declaro una variable useState para almacenar la categoria seleccionada.
    const [categoriaSelect, setCategoriaSelect] = useState (null);
    
    //rescatamos la id de la ruta dinamica con el objeto useParams.
    const {idPost} = useParams();
    
    const idPostNum = parseInt(idPost);

    //Función actualiza la variable y se comunica con el hijo y el nieto para pasar los datos de categoria seleccionada.
    //paso solo la id de la categoria para poder compararla con la id de las publicaciones.
    function seleccionarCategoria (categoria) {
        setCategoriaSelect(categoria)
    }
    //console.log(categoriaSelect)
  
    return (
        <>
            
            <h1>Bitacora</h1>
            {/*Si id es diferente de null mostrar vista A y si no mostrar vista B */}

            {/*Muestro lista categorias, comunico información entre abuelo, hijo y nieto.*/}
            <CategoryList clickCategoryCallBack ={seleccionarCategoria}/>

            {/*Renderizado condicional de la categoria seleccionada (operador ternario)- 
            para mostrar todas las publicaciones id es 1, el resto hay que usar el filtro para comparar
            las propiedades del objeto leido con el objeto seleccionado. */}          
            {categoriaSelect === 1 ? 
                postData.map((ObjetoPost, i) => {
                    return (
                        <PostCard
                            key={i} 
                            post={ObjetoPost}
                        />
                    )
            })
            : postData
                .filter((post) => post.categoriaId === categoriaSelect)
                .map((ObjetoPost, i) => {
                    return (
                        <PostCard 
                            key={i} 
                            post={ObjetoPost}
                        />
                    )
                }) 
            }

            {/*Muestro lista publiaciones*/}
            <PostList/>
            {/*Pinto PostDetail cuando toca*/}
            <Outlet/>
            
        </>
    )
}

export default Bitacora;

 