import PostCard from "../components/PostCard";
import postData from "../data/postData";
import CategoryList from "../components/CategoryList";
import PostList from "../components/PostList";
import PostDetail from "../components/PostDetail";

import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import "./Bitacora.css"

function Bitacora () {
    //Declaro una variable useState para almacenar la categoria seleccionada.
    const [categoriaSelect, setCategoriaSelect] = useState (null);
    
    //rescatamos la id de la ruta dinamica con el objeto useParam. 
    const {idPost} = useParams();
    //declaramos variable y convertimos id a booleano. (si o no tenemos id en la ruta)
    const esPostDetalle = Boolean(idPost);

    //Función actualiza la variable y se comunica con el hijo y el nieto para pasar los datos de categoria seleccionada.
    //paso solo la id de la categoria para poder compararla con la id de las publicaciones.
    function seleccionarCategoria (categoria) {
        setCategoriaSelect(categoria)
    }
    //console.log(categoriaSelect)
  
    return (
        //Contenido principal de página.
        <main className="bitacora">
            <h1>Bitacora</h1>
            <section>
                {/*Rederizado condicional si tenemos :id o no - mostramos lista de publicaciones y 
                publicación en detalle (outlet) o categorias, listado, y post*/}
                {esPostDetalle ? 
                    <div className="bitacora-detalle">
                        <PostList/><Outlet/>
                    </div> : 

                    <div className="bitacora-principal">   
                        {/*Muestro lista categorias, comunico información entre abuelo, hijo y nieto.*/}
                        <CategoryList clickCategoryCallBack ={seleccionarCategoria}/>
                        
                        <div className="bitacora-menus">
                            <PostList/> 

                            <div className="bitacora-post">
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
                            </div>
                        </div>
                    </div>}
            </section>                          
        </main>
    )
}

export default Bitacora;

 